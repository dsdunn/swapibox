import React from 'react';

const Card = ({person, vehicle}) => {
  const Card = person ? 
        <div className="card"> 
          <button> Favorite </button>
          <h2>name: {person.name}</h2>
          <p>species: {person.species}</p>
          <p>Homeworld: {person.planetName}</p>
          <p>population: {person.population}</p>
        </div>
        :
        <div>
          <button> Favorite </button>
          <h2>name: {vehicle.name}</h2>
          <p>model: {vehicle.model}</p>
          <p>class: {vehicle.vehicle_class}</p>
          <p>Passengers: {vehicle.passengers}</p>
        </div>   

  return Card;
}

export default Card;