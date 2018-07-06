import React from 'react';

const Card = ({person, vehicle, planet, toggleFavorites}) => {

const displayResidents = (residents) => {
  return residents.map(resident => <li key={resident}>{resident}</li> )
}

  const Card = person ? 
        <div className="card"> 
          <button onClick={toggleFavorites} name={person.name}> Favorite </button>
          <h2>name: {person.name}</h2>
          <p>species: {person.species}</p>
          <p>Homeworld: {person.planetName}</p>
          <p>population: {person.population}</p>
        </div>
        : vehicle ?
        <div>
          <button onClick={toggleFavorites}> Favorite </button>
          <h2>name: {vehicle.name}</h2>
          <p>model: {vehicle.model}</p>
          <p>class: {vehicle.vehicle_class}</p>
          <p>Passengers: {vehicle.passengers}</p>
        </div>   
        : 
        <div>
          <button onClick={toggleFavorites}> Favorite </button>
          <h2>name: {planet.name}</h2>
          <p>population: {planet.population}</p>
          <p>climate: {planet.climate}</p>
          <ul>residents: {displayResidents(planet.residents)}</ul>
        </div>
  return Card;
}

export default Card;