import React, { Component } from 'react';
import Navebar from '../navbar/Navbar.js'
import './Header.css';
import EnergySymbols from '../energySymbols/EnergySymbols.js'
import SignUp from '../modals/signUp/SignUp.js'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Navebar userInSession ={this.props.userInSession} getUser={this.props.getUser}/>
        <div className="containerCol">
          <EnergySymbols className=""/>
          <SignUp className="center"/>
        </div>
      </div>
    )
  }
}

export default Header;
