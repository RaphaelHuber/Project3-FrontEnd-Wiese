import React, { Component } from 'react';

import windPowerDark from '../../../public/img/icons/windPowerDark.png';
import solarDark from '../../../public/img/icons/SolarDark.png';
import hydroDark from '../../../public/img/icons/HydroDark.png';
import biomassDark from '../../../public/img/icons/BiomassDark.png';
import windPowerLight from '../../../public/img/icons/windPowerLight.png';
import solarLight from '../../../public/img/icons/SolarLight.png';
import hydroLight from '../../../public/img/icons/HydroLight.png';
import biomassLight from '../../../public/img/icons/BiomassLight.png';

class SourceFilter extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div>
        <img className="energySybmols-icons" src={ windPowerDark } onClick = {() => this.props.filterProjectsBySource('Wind')} />
        <img className="energySybmols-icons" src={ solarDark } onClick = {() => this.props.filterProjectsBySource('Solar')}/>
        <img className="energySybmols-icons" src={ hydroDark } onClick = {() => this.props.filterProjectsBySource('Hydro')}/>
        <img className="energySybmols-icons" src={ biomassDark } onClick = {() => this.props.filterProjectsBySource('Bio')}/>
      </div>
    )
  }
}

export default SourceFilter;
