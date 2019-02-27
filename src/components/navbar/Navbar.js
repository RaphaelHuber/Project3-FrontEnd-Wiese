import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const navbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Wiese</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">About Us</Nav.Link>
          <Nav.Link href="#link">Projects</Nav.Link>
          <Nav.Link href="#link">My Investments</Nav.Link>
          <Nav.Link href="#link">My Projects</Nav.Link>
        </Nav>
        <Form inline>
          <Button variant="outline-success">Login</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default navbar;