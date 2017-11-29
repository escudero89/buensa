import React, { Component } from 'react';
import './App.css';

import Home from './pages/Home';

const Firebase = require('./components/Firebase');
const database = require('./services/Firebase/Database');

class App extends Component {
  constructor(props) {
    super(props);
    database();
  }

  render() {
    return (
      <div className="App">
        <Home />
        <Firebase />
      </div>
    );
  }
}

export default App;
