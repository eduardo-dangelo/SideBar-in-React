import React, { Component } from 'react'
import './Home.css'
import logo from '../../logo.svg'


class Home extends Component {
 render() {
   return (
     <div className="home">

          <img src={logo} className="App-logo" alt="logo" />
          <h1>A Sidebar in React Js</h1>
          <p>created by <a href="https://github.com/eduardo-dangelo" target="_blank">Eduardo DAngelo</a></p>
          

     </div>
   );
 }
}
export default Home;
