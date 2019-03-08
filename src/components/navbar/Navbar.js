import React from 'react';
import { Navbar, Nav, Form, NavDropdown } from 'react-bootstrap';
import './Navbar.css';
import LogIn from '../modals/logIn/LogIn.js';

const navbar = (props) => {
  return (
    <Navbar expand="lg" className="marginNav bgColorSecondary">
      <Navbar.Brand href="#home">Wiese</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="About Us" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/1.1">Who Are We</NavDropdown.Item>
            <NavDropdown.Item href="#action/1.2">Our Mission</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Projects" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/2.1">All Projects</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">My Projects</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#myInvestments">My Investments</Nav.Link>
          <Nav.Link href="#newsletter">Newsletter</Nav.Link>
          <Nav.Link href="#contactUs">Contact Us</Nav.Link>
        </Nav>
        <Form inline>
          <LogIn userInSession ={props.userInSession} getUser={props.getUser}/>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default navbar;