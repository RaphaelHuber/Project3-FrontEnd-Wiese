import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header.js';
import ProjectsDisplay from './components/projectsDisplay/ProjectsDisplay.js';
import CarouselPage from './components/imgCarousel/ImgCarousel.js'

class App extends Component {
  render() {
    return (
      <body>
        <div>
          <Header />
          <ProjectsDisplay />
          <CarouselPage />
        </div>
      </body>
    );
  }
}

export default App;
