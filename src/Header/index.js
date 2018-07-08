import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => { 
  return (
    <div className="header">
      <h1 className="title">SwapiBox</h1>
      <button onClick={props.getPeople} className="people">People</button>
      <button onClick={props.getVehicles} className="vehicles">Vehicles</button>
      <button onClick={props.getPlanets} className="planets">Planets</button>
      <button onClick={props.showFavorites} className="favorites">favorites</button>
    </div>
    )
}

Header.propTypes = {
  getPeople: PropTypes.func,
  getVehicles: PropTypes.func,
  getPlanets: PropTypes.func,
  showFavorites: PropTypes.func
}

export default Header;