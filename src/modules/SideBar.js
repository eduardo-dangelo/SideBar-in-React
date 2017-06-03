import React, { Component } from 'react'
import { FaNewspaperO, FaHome, FaUser, FaAngleRight } from 'react-icons/lib/fa'
import './SideBar.css'
import Dropdown from './Dropdown'

class DropdownMenu extends Component {
  constructor(props){
    super(props);
      this.state = {
        dropdown: true,
    }
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.dropdown, true);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.dropdown, true);
  }

  toggleDropdown(){
    this.setState(prevState =>({
      dropdown: !prevState.dropdown,
    }))
  }

  _handleBlur() {
    // Clean up everything on blur
    this.setState({
      dropdown: true,
    });
  }

  render(){
    const { dropdown } = this.state

    return (
      <div className="sidebar-menu">
        <div className="sidebar-menu-item"
            onClick={this.toggleDropdown}
            onBlur={this._handleBlur} >
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

      </div>
    )
  }
}

class SideBar extends Component {
  render() {
    return (
      <div>
        <DropdownMenu />
      </div>
    )
  }
}





export default SideBar;
