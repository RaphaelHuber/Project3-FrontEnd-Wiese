import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.js';
import Header from './components/header/Header.js';

// import ProjectList from './components/projects/ProjectList';

class App extends Component {
  render() {
    return (
      <body>
        <div>
          <Navbar />
          <Header />
        </div>
      </body>
    );
  }
}

export default App;