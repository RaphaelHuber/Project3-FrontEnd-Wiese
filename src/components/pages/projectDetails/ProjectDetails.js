import React, { Component } from 'react';
import axios from 'axios';
import './ProjectDetails.css';
import InvProgress from '../../invProgress/InvProgress.js'
import TabbedComp from '../../tabbedComp/TabbedComp.js';
import InvSummary from '../../invSummary/InvSummary.js'
import API_URL from '../../../config.js';

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
    axios.get(`${API_URL}/projects/${params.id}`, {withCredentials: true})
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
              <img className="projectDetails-iconsMargin projectDetails-icons1" src="/img/icons/MoneyBagWhite.png"></img>
              <div>{`$${raisedWithCommas}`}</div>
              <img className="projectDetails-iconsMargin projectDetails-icons2" src="/img/icons/InvestorsWhite.png"></img>
              <div>{this.state.uniqueInvestors} investors</div>
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
