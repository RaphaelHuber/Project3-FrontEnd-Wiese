import React, { Component } from 'react';
import OurNavbar from '../navbar/Navbar.js'
import './Header.css';
import EnergySymbols from '../energySymbols/EnergySymbols.js'
import SignUp from '../modals/signUp/SignUp.js'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <OurNavbar userInSession ={this.props.userInSession} getUser={this.props.getUser}/>
        <div className="containerCol">
          <EnergySymbols/>
          <SignUp className="center"/>
        </div>
      </div>
    )
  }
}

export default Header;
