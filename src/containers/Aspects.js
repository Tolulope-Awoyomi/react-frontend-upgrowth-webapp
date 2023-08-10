import React, {useState, useEffect} from 'react';

function Aspects() {
    const [aspects, setAspects] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/aspects")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAspects(data)
        })
    }, [])
  return (
    <div>Aspects</div>
  )
}

export default Aspects