import React, { Component } from 'react'
<<<<<<< HEAD

class SideBar extends Component {

  render(){
    return (
      <div>
        <h2>testing</h2>
=======
import { FaNewspaperO, FaHome, FaUser, FaAngleRight } from 'react-icons/lib/fa'
import './SideBar.css'

class SideBar extends Component {
  constructor(props){
    super(props);
      this.state = {
        dropdown: true,
        dropdown2: true,
        dropdown3: true
    }
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleDropdown2 = this.toggleDropdown2.bind(this);
    this.toggleDropdown3 = this.toggleDropdown3.bind(this);
  }

  toggleDropdown(){
    this.setState(prevState =>({
      dropdown: !prevState.dropdown,
      dropdown2: true,
      dropdown3: true
    }))
  }

  toggleDropdown2(){
    this.setState(prevState =>({
      dropdown2: !prevState.dropdown2,
      dropdown: true,
      dropdown3: true
    }))
  }

  toggleDropdown3(){
    this.setState(prevState =>({
      dropdown3: !prevState.dropdown3,
      dropdown2: true,
      dropdown: true
    }))
  }

  render(){
    const { dropdown, dropdown2, dropdown3 } = this.state

    return (
      <div className="sidebar-menu">

        <div className="sidebar-menu-item" onClick={this.toggleDropdown} >
          <FaHome className="menu-icon" />
            <span>Item 01</span>
          <FaAngleRight className={ dropdown ? ('drop-icon') : ('drop-icon-active')} />
        </div>
            { dropdown ? (<div /> ) : (
              <div className="drop-menu-box">
                <div className="drop-menu">
                  <div className="drop-menu-item">
                      <span>Drop-Item 01</span>
                  </div>
                  <div className="drop-menu-item">
                      <span>Drop-Item 02</span>
                  </div>
                </div>
              </div>
            )}


        <div className="sidebar-menu-item" onClick={this.toggleDropdown2}>
          <FaNewspaperO className="menu-icon" />
            <span>Item 02</span>
          <FaAngleRight className={ dropdown2 ? ('drop-icon') : ('drop-icon-active')} />
        </div>
          { dropdown2 ? (<div /> ) : (
            <div className="drop-menu-box">
              <div className="drop-menu">
                <div className="drop-menu-item">
                    <span>Drop-Item 03</span>
                </div>
                <div className="drop-menu-item">
                    <span>Drop-Item 04</span>
                </div>
                <div className="drop-menu-item">
                    <span>Drop-Item 05</span>
                </div>
                <div className="drop-menu-item">
                    <span>Drop-Item 06</span>
                </div>
              </div>
            </div>
          )}

          <div className="sidebar-menu-item" onClick={this.toggleDropdown3}>
            <FaUser className="menu-icon" />
              <span>Item 03</span>
            <FaAngleRight className={ dropdown3 ? ('drop-icon') : ('drop-icon-active')} />
          </div>
            { dropdown3 ? (<div /> ) : (
              <div className="drop-menu-box">
                <div className="drop-menu">
                  <div className="drop-menu-item">
                      <span>Drop-Item 07</span>
                  </div>
                  <div className="drop-menu-item">
                      <span>Drop-Item 08</span>
                  </div>
                  <div className="drop-menu-item">
                      <span>Drop-Item 09</span>
                  </div>
                  <div className="drop-menu-item">
                      <span>Drop-Item 10</span>
                  </div>
                </div>
              </div>
            )}
>>>>>>> create-sidebar-menu
      </div>
    )
  }
}

export default SideBar;
