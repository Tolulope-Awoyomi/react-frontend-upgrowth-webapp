import React from 'react';
import StrategyEditForm from '../containers/StrategyEditForm';

function Strategy({strategy, handleUpdateStrategy, handleDeleteStrategy}) {
  return (
    <div>
        <p>{strategy.name}</p>
        <StrategyEditForm strategy={strategy} handleUpdateStrategy={handleUpdateStrategy} handleDeleteStrategy={handleDeleteStrategy}/>
        <hr />
    </div>
  )
}

export default Strategy
