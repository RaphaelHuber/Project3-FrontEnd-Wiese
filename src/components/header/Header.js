import React from 'react';
import Navebar from '../navbar/Navbar.js'
import './Header.css';
import energySymbols from '../energySymbols/EnergySymbols.js'

const header = () => {
  return (
    <div className="header">
      <Navebar />
      <energySymbols />
    </div>
  )
}

export default header;
