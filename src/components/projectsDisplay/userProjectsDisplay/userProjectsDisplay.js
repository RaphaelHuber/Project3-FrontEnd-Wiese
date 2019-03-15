import React, { Component } from 'react';
import ProjectCard from '../projectCard/projectCard';
import { Row, Col } from 'react-bootstrap';
import '../ProjectsDisplay.css';
import Filter from '../../filter/Filter';

class UserProjectsDisplay extends Component {
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

  componentDidUpdate(prevProps){
    if (this.props.userProjects !== prevProps.userProjects) {
      this.setState({allProjects: this.props.userProjects, displayProjects: this.props.userProjects})
    }
  };

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

export default UserProjectsDisplay;