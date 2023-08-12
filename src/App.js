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
      // Map over the aspects array to find the aspect containing the updated strategy
      const updatedAspects = aspects.map((aspect) => {
        if (aspect.strategies.some((strategy) => strategy.id === updatedStrategy.id)) {
          // Replace the existing strategy with the updatedStrategy
          const updatedStrategies = aspect.strategies.map((strategy) =>
            strategy.id === updatedStrategy.id ? updatedStrategy : strategy
          );
          // Return the aspect with the updated strategies
          return { ...aspect, strategies: updatedStrategies };
        } else {
          return aspect; // Return other aspect objects unchanged
        }
      });
    
      // Set the state of aspects with the updated array of aspect objects
      setAspects(updatedAspects);
    }
    

    function handleDeleteStrategy(id) {
      // Find the specific aspect object to update its strategies
      const updatedAspects = aspects.map((aspect) => {
        if (aspect.strategies.some((strategy) => strategy.id === id)) {
          // Filter out the strategy with the specified id
          const updatedStrategies = aspect.strategies.filter(
            (strategy) => strategy.id !== id
          );
          // Return the aspect with the updated strategies
          return { ...aspect, strategies: updatedStrategies };
        } else {
          return aspect; // Return other aspect objects unchanged
        }
      });
    
      // Set the state of aspects with the updated array of aspect objects
      setAspects(updatedAspects);
    }
    

  return (
    <>
      <div className="App">
      <Navigation />
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/aspects" element={<Aspects aspects={aspects} handleAddAspect={handleAddAspect} />} />
          <Route path="/aspects/:id" element={<Aspect aspects={aspects}  setStrategy={setStrategy} handleAddStrategy={handleAddStrategy} handleUpdateStrategy={handleUpdateStrategy} handleDeleteStrategy={handleDeleteStrategy}/>} />
        </Routes>
        
    </div>
    </>
    
  );
}

export default App;


