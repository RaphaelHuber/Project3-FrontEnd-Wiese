import React, { Component } from 'react';
import { Button, Card, Navbar, Nav, Form, NavDropdown } from 'react-bootstrap';
import './UserProfile.css';

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let userHTML;

    if(this.props.userInSession) {
      userHTML = ( <div>
        <h1>{this.props.userInSession.username}</h1>
      </div>)
    } else {
      userHTML = <h1>Loading</h1>
    }

    return (
      userHTML
    );
  }
}

export default UserProfile;
