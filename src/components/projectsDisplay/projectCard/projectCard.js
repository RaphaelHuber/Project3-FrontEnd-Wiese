import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './projectCard.css';

class projectCard extends React.Component {
  render() {
    console.log('owner', this.props.projectData.owner)
    return (
      <Card className="projectCard-margin2">
        <Card.Img className="projectCard-img" variant="top" src={ this.props.projectData.picture } />
        <Card.Body>
          <Card.Title className="projectCard-btmMargin">{this.props.projectData.name} - {this.props.projectData.country}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{this.props.projectData.owner.username}</Card.Subtitle>
          <Card.Text><strong>Target: </strong> {`$ 
          ${this.props.projectData.targetAmount} (min inv of $ ${this.props.projectData.minimumInvestment})`}
          </Card.Text>
          <Card.Text><strong>Return: </strong>
          {`${this.props.projectData.expectedReturn} %`}
          </Card.Text>
          <Card.Text className="projectCard-overflow">
          {this.props.projectData.description}
          </Card.Text>
          <div className="conatinerRow projectCard-margin1">
            <Link to={`/projectDetails/${this.props.projectData._id}`}>
              <Button variant="primary">More Details</Button>
            </Link>
            <img className="projectCard-sourceIcon" src={`../../../../public/img/icons/${this.props.projectData.energySource}Colored.png`}/>
            </div>
            </Card.Body>
            </Card>
            );
          }
        }
        
export default projectCard;