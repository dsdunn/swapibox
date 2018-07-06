import React, { Component } from 'react';
import './styles.css';
import DataCleaner from '../helper.js'
import Header from '../Header';
import Body from '../Body';
import Sidebar from '../Sidebar';

const dataCleaner = new DataCleaner();

class App extends Component {
  constructor(props) {
    super();
    this.state = {
    }
  }

  async componentDidMount() {
     this.setState({
      filmInfo: await dataCleaner.grabScroll()
     })
  }

  getPeople = async () => {
    if(!this.state.people) {
      this.setState({
        people: await dataCleaner.getPeople()
      })
    }
    this.setState({
      category: 'people'
    })
  }

  getVehicles = async () => {
    if(!this.state.vehicles) {
      this.setState({
        vehicles: await dataCleaner.getVehicles()
      })
    }
    this.setState({
      category: 'vehicles'
    })
  }

  getPlanets = async () => {
    if(!this.state.planets) {
      this.setState({
        planets: await dataCleaner.getPlanets()
      })
    }
    this.setState({
      category: 'planets'
    })
  }

  toggleFavorites = (event) => {
    console.log(event.target.name)
  }

  render() {
    return (
      <div className="App">
        <Header 
          getPeople={this.getPeople} 
          getVehicles={this.getVehicles} 
          getPlanets={this.getPlanets}
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
