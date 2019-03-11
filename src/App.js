import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Main from './components/pages/main/Main';
import ProjectDetails from './components/pages/projectDetails/ProjectDetails';
import OurNavbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import AuthService from './components/auth/auth-service';
import UserProfile from './components/pages/profile/UserProfile';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggedInUser: null,
      pictures: []
    };
    this.service = new AuthService();
    this.getTheUser = this.getTheUser.bind(this);
    this.fetchUser = this.fetchUser.bind(this);
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
          <Route exact path='/projectDetails/:id' component={ ProjectDetails } picture={this.state.pictures[0]}/>
          <Route exact path='/myProfile' render={(props) => <UserProfile {...props} userInSession = {this.state.loggedInUser} />} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
