import React, { Component } from 'react';
import { Button, Navbar, Nav, Form, NavDropdown } from 'react-bootstrap';
import './Navbar.css';
import LogIn from '../modals/logIn/LogIn.js';
import AuthService from '../auth/auth-service';

class OurNavbar extends Component {
  constructor(props){
    super(props);
    this.service = new AuthService();
    this.logoutUser = this.logoutUser.bind(this);
  }
  
  logoutUser() {
    this.service.logout()
    .then(() => {
      this.props.getUser(null);  
    })
  }
  
  render() {
    let logStatus;

    if(this.props.userInSession) {
      logStatus = 
      <div>
        <Nav.Link href="#contUs">{this.props.userInSession.username}</Nav.Link>
        <Button variant="primary" onClick={this.logoutUser}>Logout</Button>
      </div>
    } else {
      logStatus = <LogIn userInSession ={this.props.userInSession} getUser={this.props.getUser}/>;
    }

    return (
      <Navbar expand="lg" className="bgColorSecondary">
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
            {logStatus}
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default OurNavbar;
