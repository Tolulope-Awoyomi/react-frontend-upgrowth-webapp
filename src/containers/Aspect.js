import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Strategy from '../components/Strategy';
import StrategyForm from './StrategyForm';

function Aspect({ aspects, setStrategy, handleAddStrategy, handleUpdateStrategy }) {
  const params = useParams();
  const aspectId = parseInt(params.id); // Convert the id to an integer
  const [selectedAspect, setSelectedAspect] = useState({
    strategies: []
  })

  useEffect(() => {
    const chosenAspect = aspects.find((aspect) => aspect.id === aspectId);
    if (chosenAspect) {
      setSelectedAspect(chosenAspect)
    }
  }, [aspects])


  // // Find the selected aspect from the aspects array

  
  return (
    <div>
      <h3>{selectedAspect.name}</h3>
      <hr />
      {selectedAspect.strategies.map((strategy) => (
        <Strategy key={strategy.id} strategy={strategy} handleUpdateStrategy={handleUpdateStrategy} />
      ))}
      <StrategyForm aspects={aspects} setStrategy= {setStrategy} handleAddStrategy={handleAddStrategy} aspectId={aspectId}/>
    </div>
  );
}

export default Aspect;
