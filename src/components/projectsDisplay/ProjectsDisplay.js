import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProjectCard from './projectCard/projectCard';

class projectsDisplay extends Component {
  constructor(props){
    super(props);
    this.state = {
      allProjects: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/projects`)
      .then((response) => {
        this.setState({allProjects: response})
        console.log('buuu', this.state.allProjects)
      })
  }
  
  render() {
    if(!this.state.allProjects.data) {
      return <h1></h1>
    }
    return (
      <div>
        <h1>AAAAAAAAAA</h1>
        <h1>{this.state.allProjects.data[0].country}</h1>
        <ProjectCard />
      </div>
    );
  }
}

export default projectsDisplay;


// 341 - Itaú
// Ag 9652
// CC 11366-4

// Essa deve ser a conta principal. A outra deve ser excluída (foi fechada)
// Obrigado!