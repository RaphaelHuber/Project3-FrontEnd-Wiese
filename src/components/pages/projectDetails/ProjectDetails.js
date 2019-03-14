import React, { Component } from 'react';
import axios from 'axios';
import './ProjectDetails.css';
import InvProgress from '../../invProgress/InvProgress.js'
import TabbedComp from '../../tabbedComp/TabbedComp.js';
import InvSummary from '../../invSummary/InvSummary.js'

class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.getSingleProject = this.getSingleProject.bind(this);
  }

  componentDidMount() {
    this.getSingleProject();
  }

  getSingleProject() {
    const { params } = this.props.match;
    console.log('params', params.id);
    axios.get(`http://localhost:5000/projects/${params.id}`)
    .then((response) => {
      this.setState(response.data);
      const uniqueInvestors = this.countUniqueInvestors(response.data.investments)
      this.setState({ uniqueInvestors })
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  countUniqueInvestors(investments) {
    let investors = [];
    investments.forEach(investment => {
      investors.push(investment.investor); 
    });
    return new Set(investors).size;
  }

  numberWithCommas(numb) {
    return numb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  render() {

    let raisedWithCommas;
    if (this.state.raisedAmount) {
      raisedWithCommas = this.numberWithCommas(this.state.raisedAmount);
    } else {
      raisedWithCommas = 0;
    }

    // makes sure that the image src is rendered when existing
    const imgSrc = (this.state.picture) ? this.state.picture : "";
    return (
      <div>
        <div className="projectDetails-container">
          <img className="projectDetails-img" src={imgSrc}/>
          <div className="projectDetails-float">
            <div className="containerRow projectDetails-align">
              <img className="projectDetails-icons" src="/img/icons/RoundLight.png"></img>
              <p>{`$${raisedWithCommas}`}</p>
              <img className="projectDetails-icons" src="/img/icons/RoundLight.png"></img>
              <p>{this.state.uniqueInvestors} investors</p>
            </div>
            <InvProgress project={this.state}/>
          </div>
        </div>
        <div className="projectDetails-infoBox containerRow flexWrap">
          <TabbedComp project={this.state} />
          <InvSummary project={this.state} userInSession={this.props.userInSession} getUser = {this.props.getUser}updateUser = {this.props.updateUser} getSingleProject={this.getSingleProject}/>
        </div>
      </div>
    );
  }
}

export default ProjectDetails;
