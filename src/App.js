import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Main from './components/pages/main/Main.js';
import ProjectDetails from './components/pages/projectDetails/ProjectDetails.js';
import OurNavbar from './components/navbar/Navbar.js'

class App extends Component {
  render() {
    return (
      <div>
        <OurNavbar userInSession ={this.props.userInSession} getUser={this.props.getUser}/>
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route exact path="/ProjectDetails" component={ ProjectDetails } />
        </Switch>
      </div>
    );
  }
}

export default App;
