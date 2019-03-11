import React, { Component } from 'react';
import { Button, Modal, Form, Span } from 'react-bootstrap';
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
      invAmount: ''
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
    const { value } = event.target;
    this.setState({invAmount: value});
  }

  handleFormSubmit(event) {
  }

  changeAmount(event) {
    const { value } = event.target
    this.setState({
      invAmount: value
    });
  }

  render() {
    console.log("data", this.props.data);
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
                className="btnBgColorSecondary invest-boxes center-text"
                onClick={this.changeAmount} value={this.props.data * 2}>
                {this.props.data * 2} $</Button>
                <Button variant="primary" 
                className="btnBgColorSecondary invest-boxes center-text"
                onClick={this.changeAmount} value={this.props.data * 5}>
                {this.props.data * 5} $</Button>
                <Button variant="primary" 
                className="btnBgColorSecondary invest-boxes center-text"
                onClick={this.changeAmount} value={this.props.data * 10}>
                {this.props.data * 10} $</Button>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Amount</Label>
                <Input 
                  type="Number"
                  placeholder= {`Min. amount is ${this.props.data} $`}
                  value={this.state.invAmount}
                  onChange={e => this.handleChange(e)}
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