import React from 'react';
import StrategyEditForm from '../containers/StrategyEditForm';

function Strategy({strategy}) {
  return (
    <div>
        <p>{strategy.name}</p>
        <hr />
        <StrategyEditForm strategy={strategy} handleUpdateStrategy={handleUpdateStrategy}/>
    </div>
  )
}

export default Strategy
