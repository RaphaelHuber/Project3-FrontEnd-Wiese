import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header.js';
import ProjectsDisplay from './components/projectsDisplay/ProjectsDisplay.js';
import CarouselPage from './components/imgCarousel/ImgCarousel.js'
import Footer from './components/footer/Footer.js';
import Filter from './components/filter/Filter.js';

class App extends Component {
  render() {
    return (
      <body>
        <div>
          <Header />
          <Filter />
          <ProjectsDisplay />
          <CarouselPage />
          <Footer />
        </div>
      </body>
    );
  }
}

export default App;
