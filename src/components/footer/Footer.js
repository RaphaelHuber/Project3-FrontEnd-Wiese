import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <Navbar expand="lg" className="footer-margin1 bgColorSecondary">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <div className="footer-margin2 footer-Col">
            <p className="footer-title">About us</p>
            <Nav.Link className="footer-padding1" href="/aboutUs">Wiese</Nav.Link>
            <Nav.Link className="footer-padding1" href="/contact">Contact us</Nav.Link>
          </div>
          <div className="footer-margin2 footer-Col">
            <p className="footer-title">Investors</p>
            <Nav.Link className="footer-padding1" href="/gettingStarted">Getting started</Nav.Link>
            <Nav.Link className="footer-padding1" href="/risks">Risks</Nav.Link>
          </div>
          <div className="footer-margin2 footer-Col">
            <p className="footer-title">Project owners</p>
            <Nav.Link className="footer-padding1" href="/fundraising">Fundraising</Nav.Link>
            <Nav.Link className="footer-padding1" href="/opportunities">Opportunities</Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Footer;
