import React from 'react';

const Card = ({person}) => {
  return (
    <div className="card"> 
      <h2>name: {person.name}</h2>
      <p>species: {person.species}</p>
      <p>Homeworld: {person.planetName}</p>
      <p>population: {person.population}</p>
    </div>
  )
}

export default Card;