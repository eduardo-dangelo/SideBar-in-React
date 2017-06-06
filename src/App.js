import React, { Component } from 'react'
import './App.css'
import CollapsedSideBar from './modules/CollapsedSideBar'


class App extends Component {
  render() {
    return (
        <div className="App">
          <CollapsedSideBar />
        </div>
      );
    }
  }

export default App;
