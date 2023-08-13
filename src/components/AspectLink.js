import React from 'react';
import { Link } from 'react-router-dom';

function AspectLink({ aspect }) {
  return (
    <div>
        <Link to={`/aspects/${aspect.id}`}>
            <h3>{aspect.name}</h3>
        </Link>
    </div>
  )
}

export default AspectLink