import React from 'react';

const SideBar = ({filmInfo}) => {
  return filmInfo ? 
      <div>
        <p>{filmInfo.crawl}</p>
        <h5>{filmInfo.filmTitle}</h5>
        <h5>{filmInfo.date}</h5>
      </div>
      : ''
}

export default SideBar;