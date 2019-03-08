import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import './Navbar.css';
import LogIn from '../modals/logIn/LogIn.js';

const navbar = (props) => {
  return (
    <Navbar bg="light" expand="lg" className="margin1">
      <Navbar.Brand href="#home">Wiese</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#aboutUs">About Us</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#myInvestments">My Investments</Nav.Link>
          <Nav.Link href="#myProjects">My Projects</Nav.Link>
        </Nav>
        <Form inline>
          <LogIn userInSession ={props.userInSession} getUser={props.getUser}/>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default navbar;