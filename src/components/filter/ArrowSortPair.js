import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

class ArrowSortPair extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Nav.Link className="filter-marginComp" href="">{this.props.criteriaDisplay}</Nav.Link>
        
        <Nav.Link className="filter-marginComp" onClick={this.props.handleUp}><img src='../../../public/img/icons/upArrow.png' name={this.props.criteria} height="10rem"/></Nav.Link>
        
        <Nav.Link className="filter-marginComp" onClick={this.props.handleDown}><img src='../../../public/img/icons/downArrow.png' name={this.props.criteria} height="10rem"/></Nav.Link> 
      </div>
    )
  }
}

export default ArrowSortPair;
