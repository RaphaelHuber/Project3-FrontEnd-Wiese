import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

import windDark from '../../../../public/img/icons/WindDark.png';
import solarDark from '../../../../public/img/icons/SolarDark.png';
import hydroDark from '../../../../public/img/icons/HydroDark.png';
import bioDark from '../../../../public/img/icons/BioDark.png';
import './SourceFilter.css'

class SourceFilter extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div className="sourceFilter-boxSize1 spaceBetween">
        <img className="sourceFilter-icons pointer" src={ windDark } onClick = {() => this.props.filterProjectsBySource('Wind')} />
        <img className="sourceFilter-icons pointer" src={ solarDark } onClick = {() => this.props.filterProjectsBySource('Solar')}/>
        <img className="sourceFilter-icons pointer" src={ hydroDark } onClick = {() => this.props.filterProjectsBySource('Hydro')}/>
        <img className="sourceFilter-icons pointer" src={ bioDark } onClick = {() => this.props.filterProjectsBySource('Bio')}/>
      </div>
    )
  }
}

export default SourceFilter;
