import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import './EnergySymbols.css';
import windPowerLight from '../../../public/img/icons/windPowerLight.png';
import solarLight from '../../../public/img/icons/SolarLight.png';
import hydroLight from '../../../public/img/icons/HydroLight.png';
import biomassLight from '../../../public/img/icons/BiomassLight.png';
import windPowerDark from '../../../public/img/icons/windPowerDark.png';
import solarDark from '../../../public/img/icons/SolarDark.png';
import hydroDark from '../../../public/img/icons/HydroDark.png';
import biomassDark from '../../../public/img/icons/BiomassDark.png';

const energySymbols = () => {
  return (
    <div className="energySymbols-mainContainer center">
      <img className="energySybmols-icons" src={ windPowerLight } />
      <img className="energySybmols-icons" src={ solarLight } />
      <img className="energySybmols-icons" src={ hydroLight } />
      <img className="energySybmols-icons" src={ biomassLight } />
    </div>
  )
}

export default energySymbols;