import React from 'react';
import PropTypes from 'prop-types';

const SideBar = ({filmInfo}) => {
  return filmInfo ? 
      <div>
        <p>{filmInfo.crawl}</p>
        <h5>{filmInfo.filmTitle}</h5>
        <h5>{filmInfo.date}</h5>
      </div>
      : <div></div>
}

SideBar.propTypes = {
  filmInfo: PropTypes.object
}

export default SideBar;