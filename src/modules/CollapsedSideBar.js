import React, { Component } from 'react'
import { FaBars, FaCogs, FaHome, FaUser, FaAngleRight, FaPaintBrush } from 'react-icons/lib/fa'
import SideBar from './SideBar'
import './CollapsedSideBar.css';

class OpenSideBar extends Component {
  constructor(props){
    super(props);
    this.state = {
       sidebar: true,
       dropdownItem1: true,
       dropdownItem2: true,
       theme: true
     }
     this.toggleSideBar = this.toggleSideBar.bind(this)
     this.toggleDropdown1 = this.toggleDropdown1.bind(this)
     this.toggleDropdown2 = this.toggleDropdown2.bind(this)
     this.themeBlack = this.themeBlack.bind(this)
     this.themeWhite = this.themeWhite.bind(this)
   }

   toggleSideBar() {
   this.setState(prevState => ({
     sidebar: !prevState.sidebar
   }))
 }

 toggleDropdown1(){
   this.setState(prevState =>({
     dropdownItem1: !prevState.dropdownItem1,
     dropdownItem2: true
   }))
 }

 toggleDropdown2(){
   this.setState(prevState =>({
     dropdownItem2: !prevState.dropdownItem2,
     dropdownItem1: true
   }))
 }

 themeBlack(){
   this.setState({
     theme: true
   })
 }

 themeWhite(){
   this.setState({
     theme: false
   })
 }

  render() {
    const { sidebar, dropdownItem1, dropdownItem2, theme } = this.state

    return (
      <div>
        { sidebar ? (
          <div>
            <a onClick={this.toggleSideBar}>
              <span className="burger-menu-bt">
                <FaBars />
              </span>
            </a>
          </div>
        ) : (
          <div>
            <div className={ theme ? ' side-bar-container dark' : 'side-bar-container white' }>

              <div className="sidebar-menu-item" onClick={this.toggleSideBar}>
                <FaHome className="menu-icon" />
                  <span>Home</span>
              </div>

              <div className="sidebar-menu-item" onClick={this.toggleDropdown2}>
                <FaCogs className="menu-icon" />
                  How it works
                <FaAngleRight className={ dropdownItem2 ? ('drop-icon') : ('drop-icon-active')} />
              </div>

              { dropdownItem2 ? (<div /> ) : (
                <div className="drop-menu-box" onClick={this.toggleSideBar}>
                  <div className="drop-menu">
                    <div className="drop-menu-item">
                      Switch betwen bars
                    </div>
                    <div className="drop-menu-item">
                      Collapsed Bar
                    </div>
                    <div className="drop-menu-item">
                      Fixed Bar
                    </div>
                    <div className="drop-menu-item">
                      Links
                    </div>
                    <div className="drop-menu-item">
                      Change Themes
                    </div>
                  </div>
                </div>
              )}

              <div className="sidebar-menu-item" onClick={this.toggleDropdown1}>
                <FaPaintBrush className="menu-icon" />
                  Themes
                <FaAngleRight className={ dropdownItem1 ? ('drop-icon') : ('drop-icon-active')} />
              </div>

              { dropdownItem1 ? (<div /> ) : (
                <div className="drop-menu-box" >
                  <div className="drop-menu">
                    <div className="drop-menu-item" onClick={this.themeBlack}>
                      Dark
                    </div>
                    <div className="drop-menu-item" onClick={this.themeWhite}>
                      White
                    </div>
                  </div>
                </div>
              )}

              <div className="sidebar-menu-item" onClick={this.toggleSideBar}>
                <FaUser className="menu-icon" />
                  <span>About</span>
              </div>

            </div>
            <span className="close-area" onClick={this.toggleSideBar} />
          </div>
        )}
      </div>
    );
  }
}

export default OpenSideBar;
