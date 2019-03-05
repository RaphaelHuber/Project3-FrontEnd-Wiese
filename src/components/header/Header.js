import React from 'react';
import Navebar from '../navbar/Navbar.js'
import './Header.css';
import EnergySymbols from '../energySymbols/EnergySymbols.js'
import SignUp from '../modals/signUp/SignUp.js'

const Header = () => {
  return (
    <div className="header">
      <Navebar />
      <div className="containerCol">
        <EnergySymbols className=""/>
        <SignUp className="center"/>
      </div>
    </div>
  )
}

export default Header;
