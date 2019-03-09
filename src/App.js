import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Main from './components/pages/main/Main.js';
import ProjectDetails from './components/pages/projectDetails/ProjectDetails.js';
import OurNavbar from './components/navbar/Navbar.js';
import AuthService from './components/auth/auth-service.js';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggedInUser: null
    };
    this.service = new AuthService();
    this.getTheUser = this.getTheUser.bind(this);
  }

  getTheUser(userObj) {
    this.setState({
      loggedInUser: userObj
    })
  }
  
  render() {
    return (
      <div>
        <OurNavbar userInSession={this.state.loggedInUser} getUser={this.getTheUser}/>
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route exact path="/ProjectDetails" component={ ProjectDetails } />
        </Switch>
      </div>
    );
  }
}

export default App;
