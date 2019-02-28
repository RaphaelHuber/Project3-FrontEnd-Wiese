import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './OwnerSignUp.css';

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
          <Modal.Body>E-Mail</Modal.Body>
          <Modal.Body>Company</Modal.Body>
          <Modal.Body>Password</Modal.Body>
          <Modal.Body>Repeat Password</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
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