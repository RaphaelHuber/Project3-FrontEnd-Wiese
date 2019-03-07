import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <Navbar bg="light" expand="lg" className="footer">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <ul className="styleNone margin1">
            <li className="font1">About Us</li>
            <li><Nav.Link href="#whoAreWe">Who are we</Nav.Link></li>
            <li><Nav.Link href="#ourMission">Our mission</Nav.Link></li>
          </ul>
          <ul className="styleNone margin1">
            <li className="font1">Investors</li>
            <li><Nav.Link href="#gettingStarted">Getting started</Nav.Link></li>
            <li><Nav.Link href="#risks">Risks</Nav.Link></li>
          </ul>
          <ul className="styleNone margin1">
            <li className="font1">Project owners</li>
            <li><Nav.Link href="#raisingFunds">Raising funds</Nav.Link></li>
            <li><Nav.Link href="#opportunities">Opportunities</Nav.Link></li>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Footer;
