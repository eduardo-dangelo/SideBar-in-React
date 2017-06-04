import React, { Component } from 'react'
import { FaBars, FaCogs, FaHome, FaUser, FaAngleRight, FaPaintBrush, FaExchange } from 'react-icons/lib/fa'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './CollapsedSideBar.css'

import About from './pages/About'
import Home from './pages/Home'

class OpenSideBar extends Component {
  constructor(props){
    super(props);
    this.state = {
       sidebar: true,
       dropdownItem1: true,
       dropdownItem2: true,
       dropdownItem3: true,
       theme: true,
       type: true
     }
     this.toggleSideBar = this.toggleSideBar.bind(this)
     this.toggleDropdown1 = this.toggleDropdown1.bind(this)
     this.toggleDropdown2 = this.toggleDropdown2.bind(this)
     this.toggleDropdown3 = this.toggleDropdown3.bind(this)
     this.themeBlack = this.themeBlack.bind(this)
     this.themeWhite = this.themeWhite.bind(this)
     this.typeCollapsed = this.typeCollapsed.bind(this)
     this.typeFixed = this.typeFixed.bind(this)
   }

   toggleSideBar() {
   this.setState(prevState => ({
     sidebar: !prevState.sidebar
   }))
 }

 toggleDropdown1(){
   this.setState(prevState =>({
     dropdownItem1: !prevState.dropdownItem1,
     dropdownItem2: true,
     dropdownItem3: true
   }))
 }

 toggleDropdown2(){
   this.setState(prevState =>({
     dropdownItem2: !prevState.dropdownItem2,
     dropdownItem1: true,
     dropdownItem3: true
   }))
 }

 toggleDropdown3(){
   this.setState(prevState =>({
     dropdownItem3: !prevState.dropdownItem3,
     dropdownItem1: true,
     dropdownItem2: true
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

 typeCollapsed(){
   this.setState({
     type: true
   })
 }

 typeFixed(){
   this.setState({
     type: false
   })
 }

  render() {
    const { sidebar, dropdownItem1, dropdownItem2, dropdownItem3, theme, type } = this.state

    return (
      <Router>
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

              <Link to="/">
                <div className="sidebar-menu-item" onClick={ type ? (this.toggleSideBar) : '' } >
                  <FaHome className="menu-icon" />
                    <span>Home</span>
                </div>
              </Link>

              <div className="sidebar-menu-item" onClick={this.toggleDropdown2}>
                <FaCogs className="menu-icon" />
                  How it works
                <FaAngleRight className={ dropdownItem2 ? ('drop-icon') : ('drop-icon-active')} />
              </div>

              { dropdownItem2 ? (<div /> ) : (
                <div className="drop-menu-box" onClick={ type ? (this.toggleSideBar) : '' }>
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
                      Light
                    </div>
                  </div>
                </div>
              )}

              <div className="sidebar-menu-item" onClick={this.toggleDropdown3}>
                <FaExchange className="menu-icon" />
                  Type
                <FaAngleRight className={ dropdownItem1 ? ('drop-icon') : ('drop-icon-active')} />
              </div>

              { dropdownItem3 ? (<div /> ) : (
                <div className="drop-menu-box" >
                  <div className="drop-menu">
                    <div className="drop-menu-item" onClick={this.typeCollapsed}>
                      Collapsed
                    </div>
                    <div className="drop-menu-item" onClick={this.typeFixed}>
                      Fixed
                    </div>
                  </div>
                </div>
              )}


              <Link to="/about">
                <div className="sidebar-menu-item" onClick={ type ? (this.toggleSideBar) : '' } >
                  <FaUser className="menu-icon" />
                    <span>About</span>
                </div>
              </Link>



            </div>
              { type ? ( <span className="close-area" onClick={this.toggleSideBar} /> ) : ''}
            </div>






        )}
        <div className={ type ? 'width-100' : 'width-80' }>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </div>
      </Router>

    );
  }
}

export default OpenSideBar;
