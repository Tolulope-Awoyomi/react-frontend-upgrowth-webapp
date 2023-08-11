import React from 'react'

function StretegyEditForm({strategy}) {
    const [nameBody, setNameBody] = useState(strategy.name);
    function handleFormSubmit(e) {
        e.preventDefault();
    
        fetch(`http://localhost:9292/messages/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            body: messageBody,
          }),
        })
          .then((r) => r.json())
          .then((updatedMessage) => onUpdateMessage(updatedMessage));
      }
  return (
    <div>stretegyEditForm</div>
  )
}

export default StretegyEditForm