import React from 'react';
import './styles.css';

const Card = ({individual, toggleFavorites, isFavorite}) => {

  const displayResidents = (residents) => {
    return residents.map(resident => <li key={resident}>{resident}</li> )
  }

  const handleClick = () => {
    toggleFavorites(individual)
  }

  const Card = individual.species ? 
        <div className={`card ${isFavorite ? 'favorite' : ''}`}> 
          <button onClick={handleClick} name={individual.name}> Favorite </button>
          <h2>name: {individual.name}</h2>
          <p>species: {individual.species}</p>
          <p>Homeworld: {individual.planetName}</p>
          <p>population: {individual.population}</p>
        </div>
        : individual.vehicle_class ?
        <div className={`card ${isFavorite ? 'favorite' : ''}`}>
          <button onClick={handleClick} name={individual.name}> Favorite </button>
          <h2>name: {individual.name}</h2>
          <p>model: {individual.model}</p>
          <p>class: {individual.vehicle_class}</p>
          <p>Passengers: {individual.passengers}</p>
        </div>   
        : 
        <div className={`card ${isFavorite ? 'favorite' : ''}`}>
          <button onClick={handleClick} name={individual.name}> Favorite </button>
          <h2>name: {individual.name}</h2>
          <p>population: {individual.population}</p>
          <p>climate: {individual.climate}</p>
          <ul>residents: {displayResidents(individual.residents)}</ul>
        </div>
  return Card;
}

export default Card;