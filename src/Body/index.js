import React from 'react';
import Card from '../Card'

const Body = (props) => {

  const makePeopleCards = (people) => {
    return people.map(person => {
      return <Card person={person} key={person.name} />
    })
  }

  return (
      <div className="body">
        {props.people ? makePeopleCards(props.people) : ''}
      </div>
    )
}

export default Body;