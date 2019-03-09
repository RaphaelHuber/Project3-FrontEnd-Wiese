import React, { Component } from 'react';
import './ProjectsDetails.css';
import Footer from '../../footer/Footer';
import { ProgressBar } from 'react-bootstrap';

class ProjectDetails extends Component {
  render() {
    return (
      <div>
        <div className="projectDetails-container">
          <img className="projectDetails-img" src="../../../../public/img/projects/solar-energy.png"/>
          <div className="projectDetails-float">
          <ProgressBar>
            <ProgressBar striped variant="warning" now={20} label={`${20}%`} key={1} />
            <ProgressBar striped variant="success" now={35} label={`${35}%`} key={2} />
          </ProgressBar>;
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}


export default ProjectDetails;
