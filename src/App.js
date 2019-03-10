import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Main from './components/pages/main/Main.js';
import ProjectDetails from './components/pages/projectDetails/ProjectDetails.js';
import OurNavbar from './components/navbar/Navbar.js';
import Footer from '../../footer/Footer.js';
import AuthService from './components/auth/auth-service.js';
import UserProfile from './components/profile/UserProfile';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggedInUser: null
    };
    this.service = new AuthService();
    this.getTheUser = this.getTheUser.bind(this);
  }

  fetchUser(){
    if(this.state.loggedInUser === null){
      this.service.loggedin()
      .then(response => {
        this.setState({
          loggedInUser: response
        }) 
      })
      .catch((err) =>{
        this.setState({
          loggedInUser: false
        }) 
      })
    }
  }

  getTheUser(userObj) {
    this.setState({
      loggedInUser: userObj
    })
  }
  
  render() {
    {this.fetchUser()}
    return (
      <div>
        <OurNavbar userInSession={this.state.loggedInUser} getUser={this.getTheUser}/>
        <Switch>
          <Route exact path='/' render={(props) => <Main {...props}userInSession={this.state.loggedInUser} getUser={this.getTheUser} />} />
          <Route exact path='/ProjectDetails' component={ ProjectDetails } />
          <Route exact path='/myProfile' render={(props) => <UserProfile {...props}userInSession={this.state.loggedInUser} />} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
