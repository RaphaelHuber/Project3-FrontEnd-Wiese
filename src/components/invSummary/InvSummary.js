import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './InvSummary.css';
import Invest from '../modals/invest/Invest';
import LogIn from '../modals/logIn/LogIn';

class InvSummary extends Component {
  numberWithCommas(numb) {
    return numb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  render() {

    let summaryButton;
    if (this.props.userInSession) {
      summaryButton = 
        <Invest data={this.props.project} userInSession={this.props.userInSession} updateUser = {this.props.updateUser} getSingleProject={this.props.getSingleProject}/>
    } else {
      summaryButton = (<div>
          <LogIn className="center" userInSession={this.props.loggedInUser} getUser={this.props.getUser}/>
          <span>Please log in to invest</span>
        </div>);
    }

    let targetWithCommas;
    if (this.props.project.targetAmount) {
      targetWithCommas = this.numberWithCommas(this.props.project.targetAmount);
    } else {
      targetWithCommas = 0;
    }

    let daysRemaining = 60;
    // let today = new Date();
    // let daysRemaining = Math.floor(this.props.project.investmentPeriod / 12 * 365) * Math.abs(today - this.props.project.created_at) / 86400000;

    return (
      <Card className="invSummary-size">
        <Card.Header className="containerRow">
          <div className="containerCol invSummary-margin1">
            <div>
              Target Sum:
            </div>
            <div className="center">
              {`$${targetWithCommas}`}
            </div>
          </div>
          <div className="containerCol invSummary-margin1">
            <div>
              Remaining Time:
            </div>
            <div className="center">
              {daysRemaining} days
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{this.props.project.name}</Card.Title>
          <Card.Text className="containerRow">
            <div>
              Return on Capital:
            </div>  
            <div className="invSummary-marginNum">
            {Math.floor(this.props.project.expectedReturn * 100)}%
            </div>  
          </Card.Text>
          <Card.Text className="containerRow">
            <div>
              Periodicity (months):
            </div>  
            <div className="invSummary-marginNum">
            {this.props.project.periodicity}
            </div>  
          </Card.Text>
          <Card.Text className="containerRow">
            <div>
              Duration (months):
            </div>  
            <div className="invSummary-marginNum">
              {this.props.project.paymentPeriod}
            </div>  
          </Card.Text>
          {summaryButton}
        </Card.Body>
      </Card>
    )
  }
}

export default InvSummary;