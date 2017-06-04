import React, { Component } from 'react'
import './Home.css'
import logo from '../../logo.svg'


class Home extends Component {
 render() {
   return (
     <div className="home">
     homepage test
     <img src={logo} className="App-logo" alt="logo" />
     </div>
   );
 }
}
export default Home;
