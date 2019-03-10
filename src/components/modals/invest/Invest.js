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
    this.changeAmount = this.changeAmount.bind(this);

    this.state = {
      show: false,
      username: "", 
      password: "",
      invAmount: 0
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

  changeAmount(event) {
    const { value } = event.target;
    this.setState({
      invAmount: value
    });
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
              <FormGroup className="spaceEven">
                <Button variant="primary" 
                className="btnBgColorSecondary invest-boxes center-text">
                Min.
                </Button>
                <Button variant="primary" 
                className="btnBgColorSecondary invest-boxes center-text">
                Min. x 2
                </Button>
                <Button variant="primary" 
                className="btnBgColorSecondary invest-boxes center-text"
                onClick={this.changeAmount} value="500">
                500
                </Button>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Amount</Label>
                <Input 
                  type="Number"
                  placeholder="min. amount"
                  value={this.state.invAmount}
                />
              </FormGroup>
            </Col>
          </Form>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose} >
              Send
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Invest;