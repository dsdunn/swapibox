import React from 'react';
import Card from '../Card'

const Body = ({state, toggleFavorites}) => {
  const makePeopleCards = (people) => {
    return people.map(person => {
      return <Card person={person} key={person.name} toggleFavorites={toggleFavorites} />
    })
  }

  const makeVehicleCards = (vehicles) => {
    return vehicles.map(vehicle => {
      return <Card vehicle={vehicle} key={vehicle.name} toggleFavorites={toggleFavorites} />
    })
  }

  const makePlanetCards = (planets) => {
    return planets.map(planet => {
      return <Card planet={planet} key={planet.name} toggleFavorites={toggleFavorites} />
    })
  }

  return (
      <div className="body">
        {state.category === 'people' ? makePeopleCards(state.people) :
          state.category === 'vehicles' ? makeVehicleCards(state.vehicles) : 
          state.category === 'planets' ? makePlanetCards(state.planets) : ''
        }
      </div>
    )
}

export default Body;