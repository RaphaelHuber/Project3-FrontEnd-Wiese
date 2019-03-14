import React, { Component } from 'react';
import OurNavbar from '../navbar/Navbar.js'
import './Header.css';
import EnergySymbols from '../energySymbols/EnergySymbols.js'
import SignUp from '../modals/signUp/SignUp.js'

class Header extends Component {
  render() {
    return (
      <div className="containerCol header">
        <div className="header-slogan">Shape a future worth investing in</div>
        <EnergySymbols/>
        <SignUp className="center" userInSession={this.props.loggedInUser} getUser={this.props.getUser}/>
      </div>
    )
  }
}

export default Header;
