import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Com from './Com';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to My World</h2>
        </div>
        <div className="App-intro">
          <Com/>
        </div>
      </div>
    );
  }
}

/**
 * 
 * React is so fuking easy
 * 
 */

export default App;