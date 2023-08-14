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
      const updatedAspects = aspects.map((aspect) => {
        if (aspect.id === newStrategy.aspect_id) {
          return {
            ...aspect,
            strategies: [...aspect.strategies, newStrategy],
          };
        } else {
          return aspect; 
        }
      });
      
      setAspects(updatedAspects);
    }
    
    function handleUpdateStrategy(updatedStrategy) {
      const updatedAspects = aspects.map((aspect) => {
        if (aspect.strategies.some((strategy) => strategy.id === updatedStrategy.id)) {
          const updatedStrategies = aspect.strategies.map((strategy) =>
            strategy.id === updatedStrategy.id ? updatedStrategy : strategy
          );
          return { ...aspect, strategies: updatedStrategies };
        } else {
          return aspect; 
        }
      });
    
      setAspects(updatedAspects);
    }
    

    function handleDeleteStrategy(id) {
      const updatedAspects = aspects.map((aspect) => {
        if (aspect.strategies.some((strategy) => strategy.id === id)) {
          const updatedStrategies = aspect.strategies.filter(
            (strategy) => strategy.id !== id
          );
          return { ...aspect, strategies: updatedStrategies };
        } else {
          return aspect; 
        }
      });
    
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
          <Route path="/aspects/:id" element={<Aspect aspects={aspects} handleAddStrategy={handleAddStrategy} handleUpdateStrategy={handleUpdateStrategy} handleDeleteStrategy={handleDeleteStrategy} />} />
        </Routes>
    </div>
    </>
    
  );
}

export default App;


