import React, { Component } from 'react'
import './App.css'
import CollapsedSideBar from './modules/CollapsedSideBar'
import SideBar from './modules/SideBar'



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
