import React, { Component } from 'react';
import './ProjectsDetails.css';
import Footer from '../../footer/Footer';
import InvProgress from '../../invProgress/InvProgress.js'

class ProjectDetails extends Component {
  render() {
    return (
      <div>
        <div className="projectDetails-container">
          <img className="projectDetails-img" src="../../../../public/img/projects/solar-energy.png"/>
          <div className="projectDetails-float">
            <div className="containerRow projectDetails-align">
              <img className="projectDetails-icons" src="../../../../public/img/icons/RoundLight.png"></img>
              <p>150.000$</p>
              <img className="projectDetails-icons" src="../../../../public/img/icons/RoundLight.png"></img>
              <p>230 Investors</p>
            </div>
            <InvProgress />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}


export default ProjectDetails;
