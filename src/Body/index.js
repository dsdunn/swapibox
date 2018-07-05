import React from 'react';
import Card from '../Card'

const Body = (props) => {
  const makePeopleCards = (people) => {
    return people.map(person => {
      return <Card person={person} key={person.name} />
    })
  }

  const makeVehicleCards = (vehicles) => {
    return vehicles.map(vehicle => {
      return <Card vehicle={vehicle} key={vehicle.name} />
    })
  }

  const makePlanetCards = (planets) => {
    return planets.map(planet => {
      return <Card planet={planet} key={planet.name} />
    })
  }

  return (
      <div className="body">
        {props.people ? makePeopleCards(props.people) :
          props.vehicles ? makeVehicleCards(props.vehicles) : 
          props.planets ? makePlanetCards(props.planets) : ''
        }
      </div>
    )
}

export default Body;