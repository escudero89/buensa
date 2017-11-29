import React, { Component } from 'react';
import './App.css';

import Home from './pages/Home';

const setup = require('./services/Firebase');

class App extends Component {
  constructor(props) {
    super(props);
    setup();
  }

  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
