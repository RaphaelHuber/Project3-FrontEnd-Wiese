import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl} from 'react-bootstrap';
import './Filter.css';
import MultiSelect from './multiSelect/MultiSelect.js';
import ArrowSortPair from './ArrowSortPair'

const test = [
  { value: "ocean", label: "ocean"},
  { value: "fire", label: "fire"},
]

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
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Form inline>
              <FormControl type="text" placeholder="Search..." className="" />
            </Form>
            <Nav.Link className="filter-marginComp" href="">ROI</Nav.Link>
            <div display="inline-block">
              <ArrowSortPair handleUp = {this.handleUp} handleDown = {this.handleDown}/>
            </div>
          </Nav>
          <div className="filter-boxSize1">
            <MultiSelect/>
          </div>
        </Navbar.Collapse>
      </Navbar>
    ) 
  }
}

export default Filter;