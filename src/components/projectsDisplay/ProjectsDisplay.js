import React, { Component } from 'react';
import axios from 'axios';
import ProjectCard from './projectCard/projectCard';
import { Row, Col, Button } from 'react-bootstrap';
import './ProjectsDisplay.css';
import Filter from '../filter/Filter';

class projectsDisplay extends Component {
  constructor(props){
    super(props);
    this.state = {
      allProjects: [],
      displayProjects: [],
      filteredSource : 'None'
    }
    this.sortProjectsUp = this.sortProjectsUp.bind(this);
    this.sortProjectsDown = this.sortProjectsDown.bind(this);
    this.filterProjectsBySource = this.filterProjectsBySource.bind(this);
    this.filterProjectsByName = this.filterProjectsByName.bind(this);
  }

  sortProjectsUp(criteria) {
    let sortedArray = this.state.displayProjects.sort(function (a,b) {
      const critA = a[criteria];
      const critB = b[criteria];
      if (critA < critB) {
        return -1;
      }
      if (critA > critB) {
        return 1;
      }
    });
    this.setState({displayProjects: sortedArray});
  }

  sortProjectsDown(criteria) {
    let sortedArray = this.state.displayProjects.sort(function (a,b) {
      const critA = a[criteria];
      const critB = b[criteria];
      if (critA < critB) {
        return 1;
      }
      if (critA > critB) {
        return -1;
      }
    });
    this.setState({displayProjects: sortedArray});
  }
  
  filterProjectsBySource(source) {
    if(source === this.state.filteredSource) {
      this.setState({
        displayProjects: this.state.allProjects,
        filteredSource: 'None'
      })
    } else{
      let filteredArray = this.state.allProjects.filter(project => project.energySource === source);
      this.setState({
        displayProjects: filteredArray,
        filteredSource: source
      });
    }
  }

  filterProjectsByName(barInput) {
    let filteredArray = this.state.allProjects.filter(project => project.name.toUpperCase().includes(barInput.toUpperCase()));
    this.setState({displayProjects: filteredArray});
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/projects`)
      .then((response) => {
        this.setState({allProjects: response.data, displayProjects: response.data})
      })
  }

  render() {
    return (
      <div id="allProjects">
        <Filter sortProjectsUp = {this.sortProjectsUp} sortProjectsDown = {this.sortProjectsDown} filterProjectsBySource = {this.filterProjectsBySource} filterProjectsByName = {this.filterProjectsByName}/>
        <div className="flexWrap projectsDisplay-margin2">
          <Row>
            {this.state.displayProjects && this.state.displayProjects.map((project, i) => {
              return(<Col key={i} className="projectsDisplay-minWidth projectsDisplay-margin1 noPadding hvr-float" xs={4}><ProjectCard projectData = {project} /></Col>)
            })}
          </Row>
        </div>
      </div>
    );
  }
}

export default projectsDisplay;