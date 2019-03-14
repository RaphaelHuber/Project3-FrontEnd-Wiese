import React, { Component } from 'react';

import windDark from '../../../../public/img/icons/WindDark.png';
import solarDark from '../../../../public/img/icons/SolarDark.png';
import hydroDark from '../../../../public/img/icons/HydroDark.png';
import bioDark from '../../../../public/img/icons/BioDark.png';
import './SourceFilter.css'

class SourceFilter extends Component {
  constructor(props){
    super(props);
    this.toggleClassIcon1= this.toggleClassIcon1.bind(this);
    this.toggleClassIcon2= this.toggleClassIcon2.bind(this);
    this.toggleClassIcon3= this.toggleClassIcon3.bind(this);
    this.toggleClassIcon4= this.toggleClassIcon4.bind(this);
    this.state = {
      active1: false,
      active2: false,
      active3: false,
      active4: false
    };
  }

  toggleClassIcon1() {
    const currentState = this.state.active1;
    this.setState({ active1: !currentState, active2: false, active3: false, active4: false });
  };

  toggleClassIcon2() {
    const currentState = this.state.active2;
    this.setState({ active1: false, active2: !currentState, active3: false, active4: false });
  };

  toggleClassIcon3() {
    const currentState = this.state.active3;
    this.setState({ active1: false, active2: false, active3: !currentState, active4: false });
  };

  toggleClassIcon4() {
    const currentState = this.state.active4;
    this.setState({ active1: false, active2: false, active3: false, active4: !currentState });
  };

  render() {
    return (
      <div className="sourceFilter-boxSize1 spaceBetween">
        <img src={ windDark } className={    this.state.active1 ? 'sourceFilter-icons-active sourceFilter-icons pointer' : 'sourceFilter-icons pointer'} onClick = {() => { this.props.filterProjectsBySource('Wind'); this.toggleClassIcon1()}} />
        <img src={ solarDark } className={    this.state.active2 ? 'sourceFilter-icons-active sourceFilter-icons pointer' : 'sourceFilter-icons pointer'} onClick = {() => { this.props.filterProjectsBySource('Solar'); this.toggleClassIcon2()}}/>
        <img src={ hydroDark } className={    this.state.active3 ? 'sourceFilter-icons-active sourceFilter-icons pointer' : 'sourceFilter-icons pointer'} onClick = {() => { this.props.filterProjectsBySource('Hydro'); this.toggleClassIcon3()}}/>
        <img src={ bioDark } className={    this.state.active4 ? 'sourceFilter-icons-active sourceFilter-icons pointer' : 'sourceFilter-icons pointer'} onClick = {() => { this.props.filterProjectsBySource('Bio'); this.toggleClassIcon4()}}/>
      </div>
    )
  }
}

export default SourceFilter;
