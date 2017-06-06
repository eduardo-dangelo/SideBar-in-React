import React, { Component } from 'react'
import { FaBars, FaCogs, FaHome, FaUser, FaAngleRight, FaPaintBrush, FaExchange, FaCheck, FaListUl } from 'react-icons/lib/fa'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './CollapsedSideBar.css'
import logo from './logo.svg'

import About from './pages/about/About'
import Links from './pages/links/Links'
import Sidebar from './pages/sidebar/Sidebar'
import Switch from './pages/switch/Switch'
import Themes from './pages/themes/Themes'
import Home from './pages/home/Home'

class OpenSideBar extends Component {
  constructor(props){
    super(props);
    this.state = {
       sidebar: true,
       dropdownType: false,
       dropdownTheme: false,
       dropdownDropdown: false,
       dropdownHowItWorks: false,
       theme: true,
       type: true,
       dropdown: true
     }

     this.toggleTypeAuto = this.toggleTypeAuto.bind(this)
     this.toggleThemeAuto = this.toggleThemeAuto.bind(this)
     this.toggleDropdownAuto = this.toggleDropdownAuto.bind(this)
     this.toggleHowItWorksAuto = this.toggleHowItWorksAuto.bind(this)

     this.toggleSideBar = this.toggleSideBar.bind(this)
     this.toggleType = this.toggleType.bind(this)
     this.toggleTheme = this.toggleTheme.bind(this)
     this.toggleDropdown = this.toggleDropdown.bind(this)
     this.toggleHowItWorks = this.toggleHowItWorks.bind(this)

     this.typeCollapsed = this.typeCollapsed.bind(this)
     this.typeFixed = this.typeFixed.bind(this)
     this.themeDark = this.themeDark.bind(this)
     this.themeLight = this.themeLight.bind(this)
     this.dropdownAutoCollapsed = this.dropdownAutoCollapsed.bind(this)
     this.dropdownNormal = this.dropdownNormal.bind(this)

   }

   toggleSideBar() {
   this.setState(prevState => ({
     sidebar: !prevState.sidebar
   }))
 }

 toggleTypeAuto(){
   this.setState(prevState =>({
     dropdownType: !prevState.dropdownType,
     dropdownTheme: false,
     dropdownDropdown: false,
     dropdownHowItWorks: false
   }))
 }

 toggleThemeAuto(){
   this.setState(prevState =>({
     dropdownTheme: !prevState.dropdownTheme,
     dropdownType: false,
     dropdownDropdown: false,
     dropdownHowItWorks: false
   }))
 }

 toggleDropdownAuto() {
   this.setState(prevState =>({
     dropdownDropdown: !prevState.dropdownDropdown,
     dropdownType: false,
     dropdownTheme: false,
     dropdownHowItWorks: false
   }))
 }

 toggleHowItWorksAuto(){
   this.setState(prevState =>({
     dropdownHowItWorks: !prevState.dropdownHowItWorks,
     dropdownType: false,
     dropdownDropdown: false,
     dropdownTheme: false
   }))
 }



 toggleType(){
   this.setState(prevState =>({
     dropdownType: !prevState.dropdownType
   }))
 }

 toggleTheme(){
   this.setState(prevState =>({
     dropdownTheme: !prevState.dropdownTheme
   }))
 }

 toggleDropdown() {
   this.setState(prevState =>({
     dropdownDropdown: !prevState.dropdownDropdown
   }))
 }

 toggleHowItWorks(){
   this.setState(prevState =>({
     dropdownHowItWorks: !prevState.dropdownHowItWorks
   }))
 }


 themeDark(){
   this.setState({
     theme: true
   })
 }

 themeLight(){
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

 dropdownAutoCollapsed(){
   this.setState({
     dropdown: true,
     dropdownType: false,
     dropdownTheme: false,
     dropdownHowItWorks: false,
   })
 }

 dropdownNormal(){
   this.setState({
     dropdown: false
   })
 }

  render() {
    const { sidebar, dropdownType, dropdownTheme, dropdownDropdown, dropdownHowItWorks, theme, type, dropdown } = this.state

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
            <div className={ theme ? 'side-bar-container dark-bar' : 'side-bar-container light-bar' }>

              <Link to="/">
                <div className="sidebar-menu-item" onClick={ type && (this.toggleSideBar)} >
                  <FaHome className="menu-icon" />
                    <span>Home</span>
                </div>
              </Link>

              <div className="sidebar-menu-item" onClick={ dropdown ? (this.toggleTypeAuto) : (this.toggleType) }>
                <FaExchange className="menu-icon" />
                  Type
                <FaAngleRight className={ dropdownType ? ('drop-icon-active') : ('drop-icon')} />
              </div>

              { dropdownType && (
                <div className="drop-menu-box" >
                  <div className="drop-menu">
                    <div className="drop-menu-item" onClick={this.typeCollapsed}>
                      Collapsed
                      { type && (<FaCheck className="check-icon"/>)}
                    </div>
                    <div className="drop-menu-item" onClick={this.typeFixed}>
                      Fixed
                      { type ? '' : (<FaCheck className="check-icon" />) }
                    </div>
                  </div>
                </div>
              )}

              <div className="sidebar-menu-item" onClick={ dropdown ? this.toggleThemeAuto : this.toggleTheme }>
                <FaPaintBrush className="menu-icon" />
                  Theme
                <FaAngleRight className={ dropdownTheme ? ('drop-icon-active') : ('drop-icon')} />
              </div>

              { dropdownTheme && (
                <div className="drop-menu-box" >
                  <div className="drop-menu">
                    <div className="drop-menu-item" onClick={this.themeDark}>
                      Dark
                      { theme && (<FaCheck className="check-icon"/>)}
                    </div>
                    <div className="drop-menu-item" onClick={this.themeLight}>
                      Light
                      { theme ? '' : (<FaCheck className="check-icon" />) }
                    </div>
                  </div>
                </div>
              )}

              <div className="sidebar-menu-item" onClick={ dropdown ? this.toggleDropdownAuto : this.toggleDropdown }>
                <FaListUl className="menu-icon" />
                  Dropdown
                <FaAngleRight className={ dropdownDropdown ? ('drop-icon-active') : ('drop-icon')} />
              </div>

              { dropdownDropdown && (
                <div className="drop-menu-box" >
                  <div className="drop-menu">
                    <div className="drop-menu-item" onClick={this.dropdownAutoCollapsed}>
                      Auto-Collapsed
                      { dropdown && (<FaCheck className="check-icon"/>)}
                    </div>
                    <div className="drop-menu-item" onClick={this.dropdownNormal}>
                      Manual
                      { dropdown ? '' : (<FaCheck className="check-icon" />) }
                    </div>
                  </div>
                </div>
              )}

              <div className="sidebar-menu-item" onClick={ dropdown ? this.toggleHowItWorksAuto : this.toggleHowItWorks }>
                <FaCogs className="menu-icon" />
                  How it works
                <FaAngleRight className={ dropdownHowItWorks ? 'drop-icon-active' : 'drop-icon'} />
              </div>

              { dropdownHowItWorks && (
                <div className="drop-menu-box" onClick={ type && this.toggleSideBar }>
                  <div className="drop-menu">
                    <Link to="/switch">
                      <div className="drop-menu-item">
                        Switch betwen bars
                      </div>
                    </Link>
                    <Link to="/themes">
                      <div className="drop-menu-item">
                        Change Themes
                      </div>
                    </Link>
                    <Link to="/sidebar">
                      <div className="drop-menu-item">
                        Collapsed Bar
                      </div>
                    </Link>
                    <Link to="/sidebar">
                      <div className="drop-menu-item">
                        Fixed Bar
                      </div>
                    </Link>
                    <Link to="/sidebar">
                      <div className="drop-menu-item">
                        Dropdown Menu
                      </div>
                    </Link>
                    <Link to="/links">
                      <div className="drop-menu-item">
                        Links
                      </div>
                    </Link>
                  </div>
                </div>
              )}


            </div>
              { type && <span className="close-area" onClick={this.toggleSideBar} /> }
            </div>
        )}

        <div className={ type ? 'width-100' : 'width-80' }>
          <div className={ theme ? 'dark-page' : 'light-page' }>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/links" component={Links}/>
            <Route path="/sidebar" component={Sidebar}/>
            <Route path="/switch" component={Switch}/>
            <Route path="/themes" component={Themes}/>
          </div>
        </div>
      </div>
      </Router>

    );
  }
}

export default OpenSideBar;
