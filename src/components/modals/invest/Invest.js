import React, { Component } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import './Invest.css';
import { Col, FormGroup, Label, Input} from 'reactstrap';
import AuthService from '../../auth/auth-service';

class Invest extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      show: false,
      username: "", 
      password: ""
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
    const password = this.state.password;
    this.service.login(username, password)
      .then((response) => {
        this.setState({ username: "", password: "" });
        this.props.getUser(response);
        this.handleClose();
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <Button variant="primary"  className="invest-center" onClick={this.handleShow}>INVEST</Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Invest</Modal.Title>
          </Modal.Header>
          <Form className="form">
            <Col>
              <FormGroup>
                <Label>Some Options</Label>
                <div className="containerRow">

                </div>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Custom Amount</Label>
                <Input 
                  type="Number"
                  name="amount"
                  placeholder="min. amount"
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

export default Invest;