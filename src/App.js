import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OpenSideBar from './modules/OpenSideBar'

class App extends Component {
  render() {
    return (
      <div className="App">
      <OpenSideBar />
        <div className="body">
          <div className="intro-box">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>A sideBar in React</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
