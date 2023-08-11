import React from 'react';
import { useParams } from 'react-router-dom';
import Strategy from '../components/Strategy';
import StrategyForm from './StrategyForm';

function Aspect({ aspects, setStrategy, handleAddStrategy }) {
  const params = useParams();
  const aspectId = parseInt(params.id); // Convert the id to an integer

  // Find the selected aspect from the aspects array
  const selectedAspect = aspects.find((aspect) => aspect.id === aspectId);

  
  return (
    <div>
      <h3>{selectedAspect.name}</h3>
      <hr />
      {selectedAspect.strategies.map((strategy) => (
        <Strategy key={strategy.id} id={strategy.id} strategy={strategy} />
      ))}
      <StrategyForm aspects={aspects} setStrategy= {setStrategy} handleAddStrategy={handleAddStrategy} aspectId={aspectId}/>
    </div>
  );
}

export default Aspect;
