import React, { Component } from 'react';
import './styles.css';
import DataCleaner from '../helper.js'
import Header from '../Header';
import Body from '../Body';
import Sidebar from '../Sidebar';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      
    }
    this.dataCleaner = new DataCleaner()
  }

  async componentDidMount() {
     this.setState({
      crawl: await this.dataCleaner.grabScroll()
     })
  }

  getPeople = async () => {
    this.setState({
      people: await this.dataCleaner.getPeople()
    })
  }

  getVehicles = async () => {
    this.setState({
      vehicles: await this.dataCleaner.getVehicles()
    })
  }

  getPlanets = async () => {
    this.setState({
      planets: await this.dataCleaner.getPlanets()
    })
  }
  
  render() {
    return (
      <div className="App">
        <Header 
          getPeople={this.getPeople} 
          getVehicles={this.getVehicles} 
          getPlanets={this.getPlanets}
        />
        <Sidebar crawl={this.state.crawl}/>
        <Body 
          vehicles={this.state.vehicles} 
          people={this.state.people} 
          planets={this.state.planets}
        />
      </div>
    );
  }
}

export default App;
