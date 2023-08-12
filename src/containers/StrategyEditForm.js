import React, { useState } from 'react';

function StrategyEditForm({ strategy, handleUpdateStrategy, handleDeleteStrategy }) {

  const [nameBody, setNameBody] = useState(strategy.name);

  function handleStrategyEdit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/strategies/${strategy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: nameBody,
      }),
    })
      .then((r) => r.json())
      .then((updatedStrategy) => handleUpdateStrategy(updatedStrategy));
  }
  

  function handleDeleteClick() {
    fetch(`http://localhost:9292/strategies/${strategy.id}`, {
      method: 'DELETE'
    })
    
    handleDeleteStrategy(strategy.id)
  }


  return (
    <div className="actions">

      <button onClick={handleStrategyEdit}>
        <span role="img" aria-label="edit">
           ✏️
        </span>
      </button>

      <button onClick={handleDeleteClick}>
        <span role="img" aria-label="delete">
          🗑
        </span>
      </button>

    </div>
  );
}

export default StrategyEditForm;
