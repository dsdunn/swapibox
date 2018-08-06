import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Header = (props) => { 
  return (
    <div className="header">
      <h1 className="title">Swapi-Box</h1>
      <div className="controls">
        <button onClick={props.getPeople} className="people">People</button>
        <button onClick={props.getVehicles} className="vehicles">Vehicles</button>
        <button onClick={props.getPlanets} className="planets">Planets</button>
        <button onClick={props.showFavorites} className="favorites">Favorites</button>
      </div>
    </div>
    );
};

Header.propTypes = {
  getPeople: PropTypes.func,
  getVehicles: PropTypes.func,
  getPlanets: PropTypes.func,
  showFavorites: PropTypes.func
};

export default Header;