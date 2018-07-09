import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const SideBar = ({filmInfo}) => {
  return filmInfo ? 
      <div className='sideBar'>
        <div className='container'>
          <p>{filmInfo.crawl}</p>
          <p>{filmInfo.filmTitle}</p>
          <p>{filmInfo.date}</p>
        </div>
      </div>
      : <div className='sideBar'></div>
}

SideBar.propTypes = {
  filmInfo: PropTypes.object
}

export default SideBar;