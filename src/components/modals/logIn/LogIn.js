import React, { Component } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import './LogIn.css';
import { Col, FormGroup, Label, Input, FormText} from 'reactstrap';
import AuthService from '../../auth/auth-service';

class LogIn extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      show: false,
      username: '', 
      password: ''
    };
    this.service = new AuthService();
  }
  
  handleShow() {
    this.setState({ show: true });
  }

  handleClose() {
    this.setState({ show: false, username: '', password: '', errorMessage: ''});
  }

  handleChange(event) {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.login(username, password)
      .then((response) => {
        this.setState({ username: '', password: '' });
        if (response.message) {
          this.setState({ errorMessage: response.message });
        } else {
          this.props.getUser(response);
        }
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>Log in</Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Log in</Modal.Title>
          </Modal.Header>
          <Form className="form">
            <Col>
              <FormGroup className="modalMargin1">
                <Label>Username</Label>
                <Input
                  type="text"
                  name="username"
                  id="exampleUsername"
                  placeholder="myUsername"
                  value={this.state.username}
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
            <FormText className="authErrorMessage">{this.state.errorMessage}</FormText>
            <Button variant="primary" onClick={this.handleFormSubmit}>
              Send
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default LogIn;