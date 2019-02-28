import React from 'react';
import Navebar from '../navbar/Navbar.js'
import './Header.css';
import EnergySymbols from '../energySymbols/EnergySymbols.js'
import InvSignUp from '../modals/invSignUp/InvSignUp.js'
import OwnerSignUp from '../modals/ownerSignUp/OwnerSignUp.js'

const Header = () => {
  return (
    <div className="header">
      <Navebar />
      <div className="containerCol">
        <EnergySymbols />
        <div className="containerRow">
          <InvSignUp className=""/>
          <OwnerSignUp className=""/>
        </div>
      </div>
    </div>
  )
}

export default Header;
