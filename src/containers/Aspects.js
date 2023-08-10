import React, {useState, useEffect} from 'react';
import AspectLink from "../components/AspectLink";

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

    const aspectsList = aspects.map(aspect => <AspectLink key={aspect.id} aspect={aspect}/>)
  return (
    <div>{aspectsList}</div>
  )
}

export default Aspects