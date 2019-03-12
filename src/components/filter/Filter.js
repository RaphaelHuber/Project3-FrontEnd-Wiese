import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Filter.css';
import NameFilter from './nameFilter/NameFilter';
import ArrowSortPair from './arrowSortPair/ArrowSortPair.js';
import SourceFilter from './sourceFilter/SourceFilter.js';


class Filter extends Component {
  constructor(props) {
    super(props);

    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
  }

  handleUp(event) {
    const { name } = event.target;
    this.props.sortProjectsUp(name);
  }

  handleDown(event) {
    const { name } = event.target;
    this.props.sortProjectsDown(name)
  }

  render() {
    return (
      <Navbar bg="invisible" expand="lg" className="filter-marginMain filter-barStyle">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="spaceBetween">
        <NameFilter filterProjectsByName = {this.props.filterProjectsByName} />
        <Nav>
        <ArrowSortPair handleUp = {this.handleUp} handleDown = {this.handleDown} criteria = {'targetAmount'} criteriaDisplay = {'Target'}/>
        </Nav>
        <Nav>
        <ArrowSortPair handleUp = {this.handleUp} handleDown = {this.handleDown} criteria = {'minimumInvestment'} criteriaDisplay = {'Minimum Inv.'}/>
        </Nav>
        <Nav>
          <ArrowSortPair handleUp = {this.handleUp} handleDown = {this.handleDown} criteria = {'expectedReturn'} criteriaDisplay = {'Return on Inv.'}/>
        </Nav>
          <SourceFilter filterProjectsBySource = {this.props.filterProjectsBySource}/>
        </Navbar.Collapse>
      </Navbar>
    ) 
  }
}

export default Filter;