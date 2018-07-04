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
     console.log(this.state.crawl)
  }

  getPeople = async () => {
    this.setState({
      people: await this.dataCleaner.getPeople()
    })
  }
  
  render() {
    return (
      <div className="App">
        <Header getPeople={this.getPeople}/>
        <Sidebar crawl={this.state.crawl}/>
        <Body people={this.state.people} />
      </div>
    );
  }
}

export default App;
