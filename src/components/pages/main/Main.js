import React, { Component } from 'react';
import './Main.css';
import Header from '../../header/Header.js';
import ProjectsDisplay from '../../projectsDisplay/ProjectsDisplay.js';
import CarouselPage from '../../imgCarousel/ImgCarousel.js'

class Main extends Component {
  render() {
    return (
      <div>
        <Header userInSession={this.props.loggedInUser} getUser={this.props.getUser}/>
        <ProjectsDisplay />
        <CarouselPage />
      </div>
    );
  }
}

export default Main;
