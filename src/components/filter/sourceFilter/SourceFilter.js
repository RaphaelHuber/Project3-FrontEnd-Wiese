import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

import windPowerDark from '../../../../public/img/icons/windPowerDark.png';
import solarDark from '../../../../public/img/icons/SolarDark.png';
import hydroDark from '../../../../public/img/icons/HydroDark.png';
import biomassDark from '../../../../public/img/icons/BiomassDark.png';
import './SourceFilter.css'

class SourceFilter extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div className="sourceFilter-boxSize1">
        <img className="energySybmols-icons pointer" src={ windPowerDark } onClick = {() => this.props.filterProjectsBySource('Wind')} />
        <img className="energySybmols-icons pointer" src={ solarDark } onClick = {() => this.props.filterProjectsBySource('Solar')}/>
        <img className="energySybmols-icons pointer" src={ hydroDark } onClick = {() => this.props.filterProjectsBySource('Hydro')}/>
        <img className="energySybmols-icons pointer" src={ biomassDark } onClick = {() => this.props.filterProjectsBySource('Bio')}/>
      </div>
    )
  }
}

export default SourceFilter;
