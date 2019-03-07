import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './projectCard.css';

class projectCard extends React.Component {
  render() {
    return (
      <Card className="minSize">
        <Card.Img variant="top" src={ this.props.projectData.pictures[0] } />
        <Card.Body>
          <Card.Title>{ this.props.projectData.country }</Card.Title>
          <Card.Text>
          { this.props.projectData.description }
          </Card.Text>
          <Button variant="primary">More</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default projectCard;
