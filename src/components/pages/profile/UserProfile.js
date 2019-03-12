import React, { Component, PropTypes } from 'react';
import { Form } from 'react-bootstrap';
import { Col, FormGroup, Label, Input} from 'reactstrap';
import './UserProfile.css';
import AddFunds from '../../modals/addFunds/AddFunds';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.updateCredit = this.updateCredit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
      const { username, email } = nextProps.userInSession;
    
      const name = nextProps.userInSession.name ? nextProps.userInSession.name : '';

      const document = nextProps.userInSession.document ? nextProps.userInSession.document : '';

      const birthDate = nextProps.userInSession.birthDate ? nextProps.userInSession.birthDate : '';

      const address = nextProps.userInSession.address ? nextProps.userInSession.address : '';

      const credit = nextProps.userInSession.credit ? nextProps.userInSession.credit : '';

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
  }

  render() {
    let userHTML;

    if(this.props.userInSession) {
      <h1>{this.props.userInSession.username}</h1>
      userHTML = ( <div>
        <Form className="form">
            <Col>
              <FormGroup >
                <Label>Username</Label>
                <Input
                  type="text"
                  name="username"
                  placeholder="myUsername"
                  value={this.state.username}
                  onChange={ e => this.handleChange(e)}
                />
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  id=""
                  placeholder="myEmail@provider.com"
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
                <Label>Credit</Label>
                <Input
                  type="Number"
                  name="credit"
                  value={this.state.credit}
                  readOnly = {true}
                />
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
            </Col>
          </Form>
      </div>)
    } else {
      userHTML = <h1>Loading</h1>
    }

    return (
      userHTML
    );
  }
}

export default UserProfile;
