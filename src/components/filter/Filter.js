import React from 'react';
import { Navbar, Nav, Form, FormControl} from 'react-bootstrap';
import './Filter.css';
import MultiSelect from './multiSelect/MultiSelect.js';

const test = [
  { value: "ocean", label: "ocean"},
  { value: "fire", label: "fire"},
]

const filter = () => {
  return (
    <Navbar bg="invisible" expand="lg" className="filter-marginMain filter-barStyle">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Form inline>
            <FormControl type="text" placeholder="Search..." className="" />
          </Form>
          <Nav.Link className="filter-marginComp" href="">ROI</Nav.Link>
          <Nav.Link className="filter-marginComp" href="">Time Periode</Nav.Link>
          <Nav.Link className="filter-marginComp" href="">Project Size</Nav.Link>
          <Nav.Link className="filter-marginComp" href="">Min. Investment</Nav.Link>
        </Nav>
        <div className="filter-boxSize1">
          <MultiSelect/>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default filter;