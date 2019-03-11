import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './projectCard.css';

class projectCard extends React.Component {
  render() {
    return (
      <Card className="projectCard-minSize">
        <Card.Img variant="top" src={ this.props.projectData.pictures[0] } />
        <Card.Body>
          <Card.Title>{this.props.projectData.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{this.props.projectData.company} - {this.props.projectData.country}</Card.Subtitle>
          <Card.Text>
          {this.props.projectData.targetAmount}
          </Card.Text>
          <Card.Text>
          {this.props.projectData.description}
          </Card.Text>
          <Link to={`/projectDetails/${this.props.projectData._id}`}>
            <Button variant="primary">More</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}

export default projectCard;
