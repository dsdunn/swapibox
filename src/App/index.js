import React, { Component } from 'react';
import './styles.css';
import * as helper from '../helper.js';
import Header from '../Header';
import Body from '../Body';
import Sidebar from '../Sidebar';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      favorites: [],
    }
  }

  componentDidMount() {
     this.getScroll();
  }

  async getScroll() {
    const filmInfo = await helper.grabScroll()
    this.setState({
      filmInfo 
     })
  }

  getPeople = async () => {
    if(!this.state.people) {
      let people = await helper.grabPeople();
      const peopleList = people.map( async (person) => {
        const name = person.name;
        const { planetName, population } = await helper.getHomeWorld(person);
        const species = await helper.getSpecies(person);
        return ({
          name,
          planetName,
          population,
          species
        })
      })
      people = await Promise.all(peopleList);
      this.setState({
        people
      })
    }
    this.setState({
      category: 'people'
    })
  }

  getVehicles = async () => {
    if(!this.state.vehicles) {
      this.setState({
        vehicles: await helper.grabVehicles()
      })
    }
    this.setState({
      category: 'vehicles'
    })
  }

  getPlanets = async () => {
    if(!this.state.planets) {
      let planets = await helper.grabPlanets()
      const planetList = planets.map( async (planet) => {
        const {name, terrain, population, climate} = await planet;
        const residents = await helper.getResidents(planet);
        return ({
          name,
          terrain,
          population,
          climate,
          residents
        })
      })
      planets = await Promise.all(planetList)
      this.setState({
        planets
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
