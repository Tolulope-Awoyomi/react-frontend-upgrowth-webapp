import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Strategy from '../components/Strategy';
import StrategyForm from './StrategyForm';

function Aspect({ aspects, handleAddStrategy, handleUpdateStrategy, handleDeleteStrategy }) {
  const params = useParams();
  const aspectId = parseInt(params.id); 
  const [selectedAspect, setSelectedAspect] = useState({
    strategies: []
  })

  useEffect(() => {
    const chosenAspect = aspects.find((aspect) => aspect.id === aspectId);
    if (chosenAspect) {
      setSelectedAspect(chosenAspect)
    }
  }, [aspects])

  
  return (
    <div>
      <h3>{selectedAspect.name}</h3>
      <hr />
      {selectedAspect.strategies.map((strategy) => (
        <Strategy key={strategy.id} strategy={strategy} handleUpdateStrategy={handleUpdateStrategy} handleDeleteStrategy={handleDeleteStrategy}/>
      ))}
      <StrategyForm aspects={aspects} handleAddStrategy={handleAddStrategy} aspectId={aspectId} />
    </div>
  );
}

export default Aspect;
