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

  return (
      <div className="body">
        {props.people ? makePeopleCards(props.people) :
          props.vehicles ? makeVehicleCards(props.vehicles) : ''}
      </div>
    )
}

export default Body;