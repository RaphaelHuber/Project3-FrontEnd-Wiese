import React, { Component } from 'react';
import { Button, Form, Col, Row, Nav, Tab, FormText  } from 'react-bootstrap';
import { FormGroup, Label, Input} from 'reactstrap';
import './UserProfile.css';
import AddFunds from '../../modals/addFunds/AddFunds';
import axios from 'axios';
import API_URL from '../../../config.js';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmationFunds: '',
      confirmationProfile: ''
    }

    this.updateCredit = this.updateCredit.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentWillReceiveProps(nextProps) {
      const { username, email } = nextProps.userInSession;
    
      const name = nextProps.userInSession.name ? nextProps.userInSession.name : '';

      const document = nextProps.userInSession.document ? nextProps.userInSession.document : '';

      const birthDate = nextProps.userInSession.birthDate ? nextProps.userInSession.birthDate : '';

      const address = nextProps.userInSession.address ? nextProps.userInSession.address : '';

      const credit = nextProps.userInSession.credit ? nextProps.userInSession.credit : 0;

      const bank = nextProps.userInSession.bank ? nextProps.userInSession.bank : '';

      const account = nextProps.userInSession.account ? nextProps.userInSession.account : '';

      this.setState({ 
        username, email, name, document, birthDate, address, credit, bank, account
      });
  }

  handleChange(event) {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
  
  updateCredit(newCredit) {
    this.setState({credit: newCredit})
    this.setState({ confirmationFunds: 'You successfully added funds to your account'});
    this.hideTimeout = setTimeout(() => this.setState({confirmationFunds: ''}), 4500)
  }

  validateEmail(text) {
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailPattern.test(text);
  }

  updateUser() {
    const { email, name, document, birthDate, address, credit, bank, account } = this.state;
    if (this.validateEmail(email)) {
      axios.patch(`${API_URL}/users/${this.props.userInSession._id}`, { email, name, document, birthDate, address, credit, bank, account }, {withCredentials: true});
      this.setState({ confirmationProfile: 'Your profile details have been updated'});
      this.hideTimeout = setTimeout(() => this.setState({confirmationProfile: ''}), 3500)
    } else {
      this.setState({ confirmationProfile: 'Please enter a valide E-Mail'});
      this.hideTimeout = setTimeout(() => this.setState({confirmationProfile: ''}), 2500)
    }
  }

  render() {
    let userHTML;

    if(this.props.userInSession) {
      <h1>{this.props.userInSession.username}</h1>
      userHTML = (
        <div className="userProfile-margin1">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column userProfile-marginTabs">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Personal Information</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Financial Details</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <FormGroup >
                      <Label>Username</Label>
                      <Input
                        type="text"
                        name="username"
                        value={this.state.username}
                        readOnly = {true}
                      />
                      <Label>Email</Label>
                      <Input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={ e => this.handleChange(e)}
                      />
                      <Label>Name</Label>
                      <Input
                        type="text"
                        name="name"
                        placeholder="John Green"
                        value={this.state.name}
                        onChange={ e => this.handleChange(e)}
                      />
                      <Label>Document</Label>
                      <Input
                        type="number"
                        name="document"
                        placeholder="000000000"
                        value={this.state.document}
                        onChange={ e => this.handleChange(e)}
                      />
                      <Label>Birthdate</Label>
                      <Input
                        type="date"
                        name="birthDate"
                        placeholder="000000"
                        value={this.state.birthDate}
                        onChange={ e => this.handleChange(e)}
                      />
                      <Label>Address</Label>
                      <Input
                        type="text"
                        name="address"
                        placeholder="Nature Avenue, 365"
                        value={this.state.address}
                        onChange={ e => this.handleChange(e)}
                      />
                    </FormGroup>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <FormGroup className="userProfile-marginTabContent">
                      <Label>Credit</Label>
                      <Input
                        type="Number"
                        name="credit"
                        value={this.state.credit}
                        readOnly = {true}
                      />
                      <FormText className="">{this.state.confirmationFunds}</FormText>
                      <AddFunds userID = {this.props.userInSession._id} oldCredit = {this.state.credit} updateCredit = {this.updateCredit}/>
                      <Label>Bank</Label>
                      <Input
                        type="number"
                        name="bank"
                        placeholder="000"
                        value={this.state.bank}
                        onChange={ e => this.handleChange(e)}
                      />
                      <Label>Account</Label>
                      <Input
                        type="number"
                        name="account"
                        placeholder="00000"
                        value={this.state.account}
                        onChange={ e => this.handleChange(e)}
                      />
                    </FormGroup>
                  </Tab.Pane>
                </Tab.Content>
                <div className="containerRow">
                  <Button variant="primary" onClick={this.updateUser}>Update</Button>
                  <div className="userProfile-confirmProfile">{this.state.confirmationProfile}</div>
                </div>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      )
    } else {
      userHTML = <h1>Loading</h1>
    }

    return (
      userHTML
    );
  }
}

export default UserProfile;