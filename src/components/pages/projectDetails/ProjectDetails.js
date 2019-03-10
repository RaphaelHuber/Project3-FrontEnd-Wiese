import React, { Component } from 'react';
import axios from 'axios';
import './ProjectsDetails.css';
import InvProgress from '../../invProgress/InvProgress.js'
import TabbedComp from '../../tabbedComp/TabbedComp.js';
import InvSummary from '../../invSummary/InvSummary.js'

class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount(){
    this.getSingleProject();
  }

  getSingleProject() {
    const { params } = this.props.match;
    axios.get(`http://localhost:5000/projects/${params.id}`)
    .then((response) => {
      this.setState(response.data);
    })
    .catch((err)=>{
        console.log(err)
    })
  }
  
  render() {
    return (
      <div>
        <div className="projectDetails-container">
          <img className="projectDetails-img" src="../../../../public/img/projects/solar-energy.png"/>
          <div className="projectDetails-float">
            <div className="containerRow projectDetails-align">
              <img className="projectDetails-icons" src="../../../../public/img/icons/RoundLight.png"></img>
              <p>{this.state.name}</p>
              <img className="projectDetails-icons" src="../../../../public/img/icons/RoundLight.png"></img>
              <p>230 Investors</p>
            </div>
            <InvProgress />
          </div>
        </div>
        <div className="projectDetails-infoBox containerRow flexWrap">
          <TabbedComp />
          <InvSummary />
        </div>
      </div>
    );
  }
}

export default ProjectDetails;
