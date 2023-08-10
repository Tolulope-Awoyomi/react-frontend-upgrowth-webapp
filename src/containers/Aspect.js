import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Strategy from "../components/Strategy";

function Aspect() {
    const [aspect, setAspect] = useState({
        strategies: []
    })

    const params = useParams();

    useEffect(() => {
        fetch(`http://localhost:9292/aspects/${params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }, [])

    const strategies = aspect.strategies.map(strategy => <Strategy id={strategy.id} strategy={strategy}/>)
  return (
    <div> 
        <h3>{aspect.name}</h3>
        <hr/>
        {strategies}
    </div>
  )
}

export default Aspect