import React, { Component } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import './SignUp.css';
import { Col, FormGroup, Label, Input} from 'reactstrap';
import AuthService from '../../auth/auth-service';

class SignUp extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      show: false,
      username: '',
      email: '',
      password: ''
    };
    this.service = new AuthService();
  }
  
  handleShow() {
    this.setState({ show: true });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleChange(event) {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const username = this.state.username;
    const email = this.state.email;
    const password = this.state.password;
    
    this.service.signup(username, email, password)
      .then((response) => {
        this.setState({ username: '', email: '', password: '' });
        this.props.getUser(response);
        this.handleClose();
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="center">
        <Button className="signUp-btnMain" variant="primary" onClick={this.handleShow}>Sign Up for Free</Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Form className="form">
            <Col>
              <FormGroup>
                <Label>Username</Label>
                <Input
                  type="text"
                  name="username"
                  id=""
                  placeholder="myUsername"
                  value={this.state.username}
                  onChange={ e => this.handleChange(e)}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="myemail@provider.com"
                  value={this.state.email}
                  onChange={ e => this.handleChange(e)}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input 
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="********"
                  value={this.state.password}
                  onChange={ e => this.handleChange(e)}
                />
              </FormGroup>
            </Col>
          </Form>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleFormSubmit}>
              Send
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SignUp;