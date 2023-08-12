import React, { useState } from 'react';

function StrategyEditForm({ strategy, handleUpdateStrategy, handleDeleteStrategy }) {
  const [nameBody, setNameBody] = useState(strategy.name);
  const [isEditing, setIsEditing] = useState(false);

  function handleStrategyEdit () {
    fetch(`http://localhost:9292/strategies/${strategy.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nameBody,
      }),
    })
    .then((response) => response.json())
    .then((updatedStrategy) => handleUpdateStrategy(updatedStrategy))
  };

  function handleEditStrategyClick (e) {
    e.preventDefault();
    setIsEditing(false);
    handleStrategyEdit();
  };

  function handleEditButtonClick () {
    setIsEditing(true);
  };

  function handleDeleteClick () {
    fetch(`http://localhost:9292/strategies/${strategy.id}`, {
      method: 'DELETE'
    })
    handleDeleteStrategy(strategy.id)
  };

  return (
    <div className="actions">
      {isEditing ? (
        <form className="edit-message" onSubmit={handleEditStrategyClick}>
          <input
            type="text"
            name="name"
            autoComplete="off"
            value={nameBody}
            onChange={(e) => setNameBody(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <span>{nameBody}</span>
          <button onClick={handleEditButtonClick}>
            <span role="img" aria-label="edit">
              ✏️
            </span>
          </button>
        </>
      )}

      <button onClick={handleDeleteClick}>
        <span role="img" aria-label="delete">
          🗑
        </span>
      </button>
    </div>
  );
}

export default StrategyEditForm;
