import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import './ArrowSortPair.css';

class ArrowSortPair extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="containerRow space">
        <div className="arrowSortPair-margin">{this.props.criteriaDisplay}</div>
        
        <Nav.Link className="arrowSortPair-margin noPadding" onClick={this.props.handleUp}><img className="arrowSortPair-size" src='../../../public/img/icons/upArrow.png' name={this.props.criteria}/></Nav.Link>
        
        <Nav.Link className="arrowSortPair-margin noPadding" onClick={this.props.handleDown}><img className="arrowSortPair-size" src='../../../public/img/icons/downArrow.png' name={this.props.criteria}/></Nav.Link> 
      </div>
    )
  }
}

export default ArrowSortPair;
