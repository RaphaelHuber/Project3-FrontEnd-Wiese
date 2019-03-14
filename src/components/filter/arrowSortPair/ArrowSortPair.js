import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import './ArrowSortPair.css';

import upArrow from '../../../../public/img/icons/upArrow.png'
import downArrow from '../../../../public/img/icons/downArrow.png'


class ArrowSortPair extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="containerRow">
        <div className="arrowSortPair-margin1">{this.props.criteriaDisplay}</div>
        <Nav.Link className="arrowSortPair-margin1 noPadding" onClick={this.props.handleDown}><img className="arrowSortPair-size" src= { upArrow } name={this.props.criteria}/></Nav.Link> 
        <Nav.Link className="arrowSortPair-margin1 noPadding" onClick={this.props.handleUp}><img className="arrowSortPair-size" src={ downArrow } name={this.props.criteria}/></Nav.Link>
      </div>
    )
  }
}

export default ArrowSortPair;
