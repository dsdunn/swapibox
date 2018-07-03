import React, { Component } from 'react';
import './styles.css';
import DataCleaner from '../helper.js'

class App extends Component {
  constructor(props) {
    super();
    this.dataCleaner = new DataCleaner()
  }

  componentDidMount() {
     console.log(this.dataCleaner.grabScroll())
  }
  
  render() {
    return (
      <div className="App">
        React
      </div>
    );
  }
}

export default App;
