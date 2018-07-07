import React, { Component } from 'react';
import './styles.css';
import { 
  grabPlanets, 
  grabPeople, 
  grabVehicles,  
  grabScroll} from '../helper.js';
import Header from '../Header';
import Body from '../Body';
import Sidebar from '../Sidebar';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      favorites: []
    }
  }

  componentDidMount() {
     this.getScroll();
  }

  async getScroll() {
    const filmInfo = await grabScroll()
    this.setState({
      filmInfo 
     })
  }

  getPeople = async () => {
    if(!this.state.people) {
      this.setState({
        people: await grabPeople()
      })
    }
    this.setState({
      category: 'people'
    })
  }

  getVehicles = async () => {
    if(!this.state.vehicles) {
      this.setState({
        vehicles: await grabVehicles()
      })
    }
    this.setState({
      category: 'vehicles'
    })
  }

  getPlanets = async () => {
    if(!this.state.planets) {
      this.setState({
        planets: await grabPlanets()
      })
    }
    this.setState({
      category: 'planets'
    })
  }

  toggleFavorites = (individual) => {
    let favorites = this.state.favorites;
    let duplicate = false;

    favorites.forEach((fav, i) => {
      if(fav.name === individual.name) {
        favorites.splice(i, 1);
        duplicate = true;
      } 
    })
    if(!duplicate) {
      favorites.push(individual);
    }
    this.setState({
      favorites
    })
  }

  showFavorites = () => {
    this.setState({
      category: 'favorites'
    })
  }

  render() {
    return (
      <div className="App">
        <Header 
          getPeople={this.getPeople} 
          getVehicles={this.getVehicles} 
          getPlanets={this.getPlanets}
          showFavorites={this.showFavorites}
        />
        <Sidebar filmInfo={this.state.filmInfo}/>
        <Body 
          state={this.state}
          toggleFavorites={this.toggleFavorites}
        />
      </div>
    );
  }
}

export default App;
