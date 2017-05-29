import React, { Component } from 'react';

import './OpenSideBar.css';

class OpenSideBar extends Component {
  constructor(props){
    super(props);
    this.state = {
       collapsed: true
     }
     this.toggleMenu = this.toggleMenu.bind(this);
   }

   toggleMenu() {
   this.setState(prevState => ({
     collapsed: !prevState.collapsed
   }))
 }

  render() {
    const { collapsed } = this.state

    return (
      <div>
        { collapsed ? (
          <div>
          <a onClick={this.toggleMenu}>off</a>
          </div>
        ) : (
          <div>
            <a onClick={this.toggleMenu}>on</a>
          </div>
        )}
      </div>
    );
  }
}

export default OpenSideBar;
