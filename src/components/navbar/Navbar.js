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
      <div className="containerRow">
        <Nav.Link className="navbar-username" href="/myProfile">{this.props.userInSession.username}</Nav.Link>
        <Button variant="primary" onClick={this.logoutUser}>Logout</Button>
      </div>
    } else {
      logStatus = <LogIn userInSession = {this.props.userInSession} getUser = {this.props.getUser}/>;
    }

    return (
      <Navbar expand="lg" className="bgColorSecondary">
        <Navbar.Brand href="/">Wiese</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#allProjects">
              All projects
            </Nav.Link>
            <NavDropdown title="My portfolio" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/allProjects">
                My investments
              </NavDropdown.Item>
              <NavDropdown.Item href="/myProjects">
                My projects
              </NavDropdown.Item>
            </NavDropdown>
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
