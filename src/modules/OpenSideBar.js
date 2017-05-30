import React, { Component } from 'react'
import FaBars from 'react-icons/lib/fa/bars'
import SideBar from './SideBar'

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
            <a onClick={this.toggleMenu}>
              <span className="burger-menu-bt">
                <FaBars />
              </span>
            </a>
          </div>
        ) : (
          <div className="" >
            <div className="side-bar" >
              <SideBar />
            </div>
            <span className="close-area" onClick={this.toggleMenu} />
          </div>
        )}
      </div>
    );
  }
}

export default OpenSideBar;
