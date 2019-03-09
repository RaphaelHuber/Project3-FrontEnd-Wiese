import React, { Component } from 'react';
import './Main.css';
import AuthService from '../../auth/auth-service.js';
import Header from '../../header/Header.js';
import ProjectsDisplay from '../../projectsDisplay/ProjectsDisplay.js';
import CarouselPage from '../../imgCarousel/ImgCarousel.js'
import Footer from '../../footer/Footer.js';
import Filter from '../../filter/Filter.js';

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProjectsDisplay />
        <CarouselPage />
        <Footer />
      </div>
    );
  }
}

export default Main;
