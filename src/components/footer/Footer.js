import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <Navbar expand="lg" className="footer-margin1 bgColorSecondary">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="spaceBetween footer-margin2">
        <Nav className="containerCol">
          <div className="footer-title footer-padding1">About us</div>
          <Nav.Link className="footer-padding1" href="/aboutUs">Wiese</Nav.Link>
          <Nav.Link className="footer-padding1" href="/contact">Contact us</Nav.Link>
        </Nav>
        <Nav className="containerCol">
          <div className="footer-title footer-padding1">Investors</div>
          <Nav.Link className="footer-padding1" href="/gettingStarted">Getting started</Nav.Link>
          <Nav.Link className="footer-padding1" href="/risks">Risks</Nav.Link>
        </Nav>
        <Nav className="containerCol">
          <div className="footer-title footer-padding1">Project owners</div>
          <Nav.Link className="footer-padding1" href="/fundraising">Fundraising</Nav.Link>
          <Nav.Link className="footer-padding1" href="/opportunities">Opportunities</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Footer;
