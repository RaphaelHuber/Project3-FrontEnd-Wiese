import React from 'react';
import Navebar from '../navbar/Navbar.js'
import './Header.css';
import EnergySymbols from '../energySymbols/EnergySymbols.js'
import { Button } from 'react-bootstrap';
import ModalInscription from '../modalInscription/ModalInscription.js'

const header = () => {
  return (
    <div className="header">
      <Navebar />
      <div className="containerCol">
        <EnergySymbols />
        <div className="containerRow">
        <Button className="marginLeft1" color="success">success</Button>
        <Button className="marginRight1" color="success">success</Button>
        </div>
      </div>
      <ModalInscription />
    </div>
  )
}

export default header;
