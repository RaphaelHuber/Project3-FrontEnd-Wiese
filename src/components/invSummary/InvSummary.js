import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import './InvSummary.css';

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
              200.000$
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
          <Card.Title>Project Name</Card.Title>
          <Card.Text className="containerRow">
            <div>
              Return on Capital:
            </div>  
            <div className="invSummary-marginNum">
              5%
            </div>  
          </Card.Text>
          <Card.Text className="containerRow">
            <div>
              Periodicity:
            </div>  
            <div className="invSummary-marginNum">
              semi-anual
            </div>  
          </Card.Text>
          <Card.Text className="containerRow">
            <div>
              Duration:
            </div>  
            <div className="invSummary-marginNum">
              5 years
            </div>  
          </Card.Text>
          <Button variant="primary" className="">INVEST</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default InvSummary;