import React from 'react';
import { useParams } from 'react-router-dom';
import Strategy from '../components/Strategy';
import StrategyForm from './StrategyForm';

function Aspect({ aspects, setStrategy, handleAddStrategy }) {
  const params = useParams();
  const aspectId = parseInt(params.id); // Convert the id to an integer

  // Find the selected aspect from the aspects array
  const selectedAspect = aspects.find((aspect) => aspect.id === aspectId);

  function addStrategy(strategy) {
    fetch('http://localhost:9292/strategies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: strategy.name,
        aspect_id: aspectId,
      }),
    })
      .then((r) => r.json())
      .then((newStrategy) => {
        handleAddStrategy(newStrategy);
        setStrategy('');
      });
  }

  if (!selectedAspect) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>{selectedAspect.name}</h3>
      <hr />
      {selectedAspect.strategies.map((strategy) => (
        <Strategy key={strategy.id} id={strategy.id} strategy={strategy} />
      ))}
      <StrategyForm handleAddStrategy={addStrategy} />
    </div>
  );
}

export default Aspect;
