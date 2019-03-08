import React, { Component } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import './LogIn.css';
import { Col, Group, FormGroup, Label, Input} from 'reactstrap';

class LogIn extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      user = {
        email: "", 
        description: "" }
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>Log in</Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.userInSession}</Modal.Title>
          </Modal.Header>
          <Form className="form">
            <Col>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="myemail@email.com"
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
                />
              </FormGroup>
            </Col>
          </Form>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              Send
            </Button>
            <Button variant="primary" onClick={this.props.getUser}>
              Test
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default LogIn;