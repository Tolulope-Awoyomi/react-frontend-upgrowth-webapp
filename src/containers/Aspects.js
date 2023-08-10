import React, {useState, useEffect} from 'react';
import AspectLink from "../components/AspectLink";
import AspectForm from "../containers/AspectForm";
import StrategyForm from './StrategyForm';

function Aspects() {
    const [aspects, setAspects] = useState([])
    const [strategies, setStrategies] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/aspects")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAspects(data)
            setStrategies(data.strategies)
        })
    }, [])

    function handleAddAspect(newAspect) {
        setAspects([...aspects, newAspect])
    }

    function handleAddStrategy(newStrategy) {
        setAspects([...strategies, newStrategy])
    }

    const aspectsList = aspects.map(aspect => <AspectLink key={aspect.id} aspect={aspect}/>)
  return (
    <>
    <div>{aspectsList}</div>
    <AspectForm onAddAspect={handleAddAspect}/>
    <StrategyForm onAddStrategy={handleAddStrategy} />
    </>
    
  )
}

export default Aspects