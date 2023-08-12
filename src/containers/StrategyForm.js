import React, { useState } from 'react';

function StrategyForm({ aspects, setStrategy, handleAddStrategy, aspectId }) {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:9292/strategies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        aspect_id: aspectId,
      }),
    })
      .then((response) => response.json())
      .then((newStrategy) => {
        handleAddStrategy(newStrategy);
        setName('');
      })
    }

  return (
    <form className="new-strategy" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        autoComplete="off"
        placeholder='Add a new strategy'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default StrategyForm;
