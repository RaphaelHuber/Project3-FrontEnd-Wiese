import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProjectCard from './projectCard/projectCard';
import { Container, Row, Col } from 'react-bootstrap';

class projectsDisplay extends Component {
  constructor(props){
    super(props);
    this.state = {
      allProjects: {}
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/projects`)
      .then((response) => {
        this.setState({allProjects: response})
      })
  }
  
  render() {
    return (
      <Container>
        <Row>
            {this.state.allProjects.data && this.state.allProjects.data.map((project) => {
              return(<Col xs={4}><ProjectCard projectData = {project} /></Col>)
            })}
        </Row>
      </Container>
    );
  }
}

export default projectsDisplay;