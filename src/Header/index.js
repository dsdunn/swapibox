import React from 'react';

const Header = (props) => { 
  return (
    <div className="header">
      <h1 className="title">SwapiBox</h1>
      <button onClick={props.getPeople} className="people">People</button>
      <button onClick={props.getVehicles} className="vehicles">Vehicles</button>
      <button onClick={props.getPlanets} className="planets">Planets</button>
      <button className="favorites">favorites</button>
    </div>
    )
}

export default Header;