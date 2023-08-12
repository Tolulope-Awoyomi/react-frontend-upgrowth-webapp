import React from 'react';
import StrategyEditForm from '../containers/StrategyEditForm';

function Strategy({strategy, handleUpdateStrategy}) {
  return (
    <div>
        <p>{strategy.name}</p>
        <StrategyEditForm strategy={strategy} handleUpdateStrategy={handleUpdateStrategy}/>
        <hr />
    </div>
  )
}

export default Strategy
