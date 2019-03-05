import React from 'react';
import { Card, Button } from 'react-bootstrap';

class projectCard extends React.Component {
  render() {
    return (
      <Card style={{ height: '15rem' }}>
        <Card.Img variant="top" src=""/>
        <Card.Body>
          <Card.Title>{this.props.projectData.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{this.props.projectData.name} - {this.props.projectData.country}</Card.Subtitle>
          <Card.Text>
          {this.props.projectData.description}
          </Card.Text>
          <Button variant="primary">More</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default projectCard;
