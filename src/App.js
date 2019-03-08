import React, { Component } from 'react';
import './App.css';
import AuthService from './components/auth/auth-service';
import Header from './components/header/Header.js';
import ProjectsDisplay from './components/projectsDisplay/ProjectsDisplay.js';
import CarouselPage from './components/imgCarousel/ImgCarousel.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggedInUser: 'maaaaa'
    };
    this.service = new AuthService();
  }

  getTheUser(userObj) {
    console.log('BUUUUU');
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {
    return (
      <body>
        <div>
          <Header userInSession ={this.state.loggedInUser} getUser={this.getTheUser}/>
          <ProjectsDisplay />
          <CarouselPage />
        </div>
      </body>
    );
  }
}

export default App;
