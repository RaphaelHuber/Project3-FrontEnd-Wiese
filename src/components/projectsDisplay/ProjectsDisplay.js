import React, { Component } from 'react';
import axios from 'axios';
import ProjectCard from './projectCard/projectCard';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ProjectsDisplay.css';

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
      <Container className="flexWrap marginMain">
        <Row>
          {this.state.allProjects.data.map((project) => {
            return(<Col className="minWidth" xs={4}><ProjectCard projectData = {project} /></Col>)
          })}
        </Row>
        <Button className="btnSecondary center marginBtn1" variant="primary">Load More</Button>
      </Container>
    );
  }
}

export default projectsDisplay;