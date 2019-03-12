import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './InvSummary.css';
import Invest from '../modals/invest/Invest.js';

class InvSummary extends Component {
  render() {
    return (
      <Card className="invSummary-size">
        <Card.Header className="containerRow">
          <div className="containerCol invSummary-margin1">
            <div>
              Target Sum:
            </div>
            <div className="center">
              {this.props.project.targetAmount} $
            </div>
          </div>
          <div className="containerCol invSummary-margin1">
            <div>
              Remaining Time:
            </div>
            <div className="center">
              63 days
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
            {this.props.project.expectedReturn}
            </div>  
          </Card.Text>
          <Card.Text className="containerRow">
            <div>
              Periodicity:
            </div>  
            <div className="invSummary-marginNum">
            {this.props.project.periodicity}
            </div>  
          </Card.Text>
          <Card.Text className="containerRow">
            <div>
              Duration:
            </div>  
            <div className="invSummary-marginNum">
              {this.props.project.paymentPeriod}
            </div>  
          </Card.Text>
          <Invest data={ this.props.project} userInSession={this.props.userInSession}/>
        </Card.Body>
      </Card>
    )
  }
}

export default InvSummary;