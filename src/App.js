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
   const [aspect, setAspect] = useState({
        strategies: []
    })

    useEffect(() => {
        fetch("http://localhost:9292/aspects")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAspects(data)
            setAspect(data)
            // setStrategy(data.strategies)
        })
    }, [])

    function handleAddAspect(newAspect) {
        setAspects([...aspects, newAspect])
    }

    function handleAddStrategy(newStrategy) {
      setStrategy([...aspect, newStrategy])
    }

    function handleUpdateMessage(updatedMessageObj) {
      const updatedMessages = messages.map((message) => {
        if (message.id === updatedMessageObj.id) {
          return updatedMessageObj;
        } else {
          return message;
        }
      });
      setMessages(updatedMessages);
    }

  return (
    <>
      <div className="App">
      <Navigation />
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/aspects" element={<Aspects aspects={aspects} handleAddAspect={handleAddAspect} />} />
          <Route path="/aspects/:id" element={<Aspect aspects={aspects}  setStrategy={setStrategy} handleAddStrategy={handleAddStrategy}/>} />
        </Routes>
        
    </div>
    </>
    
  );
}

export default App;


