import React from 'react';
import StretegyEditForm from '../containers/stretegyEditForm';

function Strategy({strategy}) {
  return (
    <div>
        <p>{strategy.name}</p>
        <hr />
        <StretegyEditForm strategy={strategy}/>
    </div>
  )
}

export default Strategy
