import React, { Component } from 'react';
import './App.css';

import Home from './pages/Home';

const Firebase = require('./components/Firebase');

class App extends Component {
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
