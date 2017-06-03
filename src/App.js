import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OpenSideBar from './modules/OpenSideBar'
import SideBar from './modules/SideBar'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
       collapsedBar: true,
       staticBar: false
     }
     this.staticBarActive = this.staticBarActive.bind(this);
     this.collapsedBarActive = this.collapsedBarActive.bind(this)
  }

  staticBarActive() {
    this.setState ({
      staticBar: true,
      collapsedBar: false
    })
  }

  collapsedBarActive() {
    this.setState ({
      collapsedBar: true,
      staticBar: false
    })
  }

  render() {
    const { collapsedBar, staticBar } = this.state

    return (
      <div className="App">
      <div>
        { staticBar ? (
          <div className="width-20">
            <SideBar />
          </div>
        ) : '' }
      </div>
        <div className={ staticBar ? 'width-80' : 'width-100'}>
            { collapsedBar ? ( <OpenSideBar /> ) : '' }
          <div className="intro-box">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>A SideBar in React</h1>

              <h4>Chose type:</h4>
              <div className="btn-box">
                <div onClick={this.collapsedBarActive} className={ collapsedBar ? 'bar-type-btn-active' : 'bar-type-btn'}>
                  Collapsed
                </div>
                <div onClick={this.staticBarActive} className={ staticBar ? 'bar-type-btn-active' : 'bar-type-btn'}>
                  Fixed
                </div>
              </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
