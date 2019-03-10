import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import './UserProfile.css';

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    this.props.fetchUser();
    console.log(this.props.userInSession);

    return (
      <Card className="userProfile-size">
        <Card.Header className="containerRow">
          <div className="containerCol userProfile-margin1">
            <div>
              Target Sum:
            </div>
            <div className="center">
              200.000$
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{username}</Card.Title>
          <Card.Text className="containerRow">
            <div>
              Return on Capital:
            </div>  
            <div className="userProfile-marginNum">
              5%
            </div>  
          </Card.Text>
          <Card.Text className="containerRow">
            <div>
              Periodicity:
            </div>  
            <div className="userProfile-marginNum">
              semi-anual
            </div>  
          </Card.Text>
          <Card.Text className="containerRow">
            <div>
              Duration:
            </div>  
            <div className="userProfile-marginNum">
              5 years
            </div>  
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default UserProfile;
