import React, {useState} from 'react'

function StrategyEditForm({strategy, handleUpdateStrategy}) {
    const [selectedOption, setSelectedOption] = useState('');
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

      function handleOptionChange(e) {
        setSelectedOption(e.target.value);
      }
    
      function handleStatementChange(e) {
        setEditedStatement(e.target.value);
      }
  return (
    <li>
      <input type="text" value={nameBody} onChange={handleStatementChange} />
    
      
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        <option value="edit">Edit</option>
        <option value="delete">Delete</option>
      </select>

      {selectedOption === 'delete' && (
        <button className="remove" onClick={handleDeleteClick}>
          Delete
        </button>
      )}

      {selectedOption === 'edit' && (
        <button className="edit" onClick={handleStrategyEdit}>
          Edit
        </button>
      )}
    </li>
  )
}

export default StrategyEditForm