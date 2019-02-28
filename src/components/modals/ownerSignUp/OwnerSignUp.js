import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import './OwnerSignUp.css';
import { Col, FormGroup, Label, Input} from 'reactstrap';

class OwnerSignUp extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
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
      <div className="marginRight1">
        <Button variant="primary" onClick={this.handleShow}>Create a Project</Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Form className="form">
            <Col>
              <FormGroup>
                <Label>Name</Label>
                <Input
                  type="text"
                  name="name"
                  id=""
                  placeholder="myname"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Surname</Label>
                <Input
                  type="text"
                  name="surname"
                  id=""
                  placeholder="mysurname"
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Company</Label>
                <Input
                  type="text"
                  name="company"
                  id=""
                  placeholder="mycompany"
                />
              </FormGroup>
            </Col>
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
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default OwnerSignUp;