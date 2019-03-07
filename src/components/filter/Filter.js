import React from 'react';
import { Navbar, Nav, Form, NavDropdown, FormControl, Button } from 'react-bootstrap';
import './Filter.css';
import MultiSelect from './multiSelect/MultiSelect.js';

const test = [
  { value: "ocean", label: "ocean"},
  { value: "fire", label: "fire"},
]

const filter = () => {
  return (
    <Navbar bg="invisible" expand="lg" className="marginMain barStyle">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Form inline>
            <FormControl type="text" placeholder="Search..." className="" />
          </Form>
          <Nav.Link className="marginFilterComp" href="">Return</Nav.Link>
          <Nav.Link className="marginFilterComp" href="">Periode of time</Nav.Link>
          <Nav.Link className="marginFilterComp" href="">Size</Nav.Link>
          <Nav.Link className="marginFilterComp" href="">Min Investment</Nav.Link>
        </Nav>
        <div className="boxSize1">
          <MultiSelect/>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default filter;