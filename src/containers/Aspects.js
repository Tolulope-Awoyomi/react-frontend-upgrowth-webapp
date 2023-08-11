import React from 'react';
import AspectLink from "../components/AspectLink";
import AspectForm from "../containers/AspectForm";

function Aspects({aspects, handleAddAspect}) {
  const aspectsList = aspects.map(aspect => <AspectLink key={aspect.id} aspect={aspect} />)

  return (
    <>
    <div>{aspectsList}</div>
    <AspectForm onAddAspect={handleAddAspect}/>
    </>
  )
}

export default Aspects