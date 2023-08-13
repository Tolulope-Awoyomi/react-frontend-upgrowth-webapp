import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    textDecoration: 'none',
    color: 'blue',
    background: 'skyblue'
}

function Navigation() {
  return (
    <div>
        <NavLink 
            to="/"
            exact
            style={link}
            > Home
        </NavLink>

        <NavLink 
            to="/aspects"
            exact
            style={link}
            > Life Aspects
        </NavLink>
    </div>
  )
}

export default Navigation;