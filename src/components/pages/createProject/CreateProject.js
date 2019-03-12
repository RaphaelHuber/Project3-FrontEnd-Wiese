import React, { Component } from 'react';
import { Button, Navbar, Nav, Form, NavDropdown } from 'react-bootstrap';
import { Col, FormGroup, Label, Input} from 'reactstrap';

class CreateProject extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    <Form className="form">
            <Col>
              <FormGroup >
                <Label>Username</Label>
                <Input
                  type="text"
                  name="username"
                  // value={this.state.username}
                  // readOnly = {true}
                />
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  // value={this.state.email}
                  // onChange={ e => this.handleChange(e)}
                />
              </FormGroup>
            </Col>
          </Form>
  }
}

export default CreateProject;
