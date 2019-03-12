import React from 'react';
import './EnergySymbols.css';
import windLight from '../../../public/img/icons/WindLight.png';
import solarLight from '../../../public/img/icons/SolarLight.png';
import hydroLight from '../../../public/img/icons/HydroLight.png';
import bioLight from '../../../public/img/icons/BioLight.png';

const energySymbols = () => {
  return (
    <div className="energySymbols-mainContainer center">
      <img className="energySybmols-icons" src={ windLight } />
      <img className="energySybmols-icons" src={ solarLight } />
      <img className="energySybmols-icons" src={ hydroLight } />
      <img className="energySybmols-icons" src={ bioLight } />
    </div>
  )
}

export default energySymbols;