import React, {useState} from 'react'

function AspectForm({ onAddAspect }) {
    const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
    
        fetch("http://localhost:9292/aspects", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: name }),
        })
          .then((r) => r.json())
          .then((newAspect) => {
            onAddAspect(newAspect);
            setName("");
          });
      }

  return (
    <form className="new-aspect" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        autoComplete="off"
        placeholder='Add a new aspect'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default AspectForm