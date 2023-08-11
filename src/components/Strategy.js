import React from 'react';
import StrategyEditForm from '../containers/StrategyEditForm';

function Strategy({id, strategy, handleUpdateStrategy}) {
  return (
    <div>
        <p>{strategy.name}</p>
        <StrategyEditForm strategy={strategy} id={id} handleUpdateStrategy={handleUpdateStrategy}/>
        <hr />
    </div>
  )
}

export default Strategy
