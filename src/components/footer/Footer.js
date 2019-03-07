import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <Navbar bg="light" expand="lg" className="footer">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <div className="margin1 footerCol">
            <p className="font1">About Us</p>
            <Nav.Link className="padding1" href="#whoAreWe">Who are we</Nav.Link>
            <Nav.Link className="padding1" href="#ourMission">Our mission</Nav.Link>
          </div>
          <div className="margin1 footerCol">
            <p className="font1">Investors</p>
            <Nav.Link className="padding1" href="#gettingStarted">Getting started</Nav.Link>
            <Nav.Link className="padding1" href="#risks">Risks</Nav.Link>
          </div>
          <div className="margin1 footerCol">
            <p className="font1">Project owners</p>
            <Nav.Link className="padding1" href="#raisingFunds">Raising funds</Nav.Link>
            <Nav.Link className="padding1" href="#opportunities">Opportunities</Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Footer;
