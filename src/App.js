import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Aspects from './containers/Aspects';
import Aspect from './containers/Aspect';

function App() {
  const [aspects, setAspects] = useState([])
  const [strategy, setStrategy] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/aspects")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAspects(data)
        })
    }, [])

    function handleAddAspect(newAspect) {
        setAspects([...aspects, newAspect])
    }

    function handleAddStrategy(newStrategy) {
      // Find the specific aspect object to update its strategies
      const updatedAspects = aspects.map((aspect) => {
        if (aspect.id === newStrategy.aspect_id) {
          // Update the strategies property for the matching aspect object
          return {
            ...aspect,
            strategies: [...aspect.strategies, newStrategy],
          };
        } else {
          return aspect; // Return other aspect objects unchanged
        }
      });
      
      // Set the state of aspects with the updated array of aspect objects
      setAspects(updatedAspects);
    }
    
    function handleUpdateStrategy(updatedStrategy) {
      // Map over the existing strategies in the aspects object
      const updatedStrategies = aspects.strategies.map((strategy) => {
        // Check if the strategy id matches the updatedStrategy id
        if (strategy.id === updatedStrategy.id) {
          // If it matches, return the updatedStrategy
          return updatedStrategy;
        } else {
          // Otherwise, return the original strategy
          return strategy;
        }
      });
    
      // Set the updated strategies back to the aspects object
      setAspects({
        ...aspects, // Keep the other properties of aspects unchanged
        strategies: updatedStrategies, // Update the strategies array
      });
    }
    

  return (
    <>
      <div className="App">
      <Navigation />
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/aspects" element={<Aspects aspects={aspects} handleAddAspect={handleAddAspect} />} />
          <Route path="/aspects/:id" element={<Aspect aspects={aspects}  setStrategy={setStrategy} handleAddStrategy={handleAddStrategy} handleUpdateStrategy={handleUpdateStrategy}/>} />
        </Routes>
        
    </div>
    </>
    
  );
}

export default App;


