import React from 'react';
import Card from '../Card';
import PropTypes from 'prop-types';
import './styles.css'

const Body = ({state, toggleFavorites}) => {

  const makeCards = (group) => {
    return group.map(individual => {
      return <Card 
          individual={individual} 
          key={individual.name} 
          toggleFavorites={toggleFavorites} 
          isFavorite={isFavorite(individual)}
        />
    })
  }

  const group = state.category === 'people' ? state.people :
    state.category === 'vehicles' ? state.vehicles :
    state.category === 'planets' ? state.planets : 
    state.category === 'favorites' ? state.favorites : []

  const isFavorite = (card) => {
    return state.favorites.filter(fav => card.name === fav.name).length > 0
  }

  return (
      <div className="body">
        {state.category === 'favorites' && !group.length ?
          <h2>no favorites</h2> :
          makeCards(group)
        }
      </div>
    )
}

Body.propTypes = {
  state: PropTypes.object.isRequired,
  toggleFavorites: PropTypes.func.isRequired
}

export default Body;