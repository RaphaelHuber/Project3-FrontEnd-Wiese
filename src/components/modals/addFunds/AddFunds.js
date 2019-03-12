import React, { Component } from 'react';
import '../invest/Invest.css';
import { Button, Modal, Form } from 'react-bootstrap';
import { Col, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';

class AddFunds extends Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      show: false,
      addAmount: 0
    };
  }
  
  handleShow() {
    this.setState({ show: true });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleChange(event) {  
    if (event.target.value === '') {
      this.setState({addAmount: 0});
    } else {
      const { value } = event.target;
      this.setState({addAmount: value});
    }
  }

  handleFormSubmit(event) {
    let newCredit = this.props.oldCredit + parseInt(this.state.addAmount, 10);
    console.log(this.props.oldCredit, newCredit);
    axios.patch(`http://localhost:5000/users/${this.props.userID}`, { credit: newCredit });
    this.props.updateCredit(newCredit);
    this.setState({addAmount: 0});
    this.handleClose();
  }

  render() {
    return (
      <div>
        <Button variant="primary"  className="invest-center" onClick={this.handleShow}>Add Funds</Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add funds</Modal.Title>
          </Modal.Header>
          <Form className="form">
            <Col>
              <FormGroup>
                <Label className="invest-labelMarg1">Amount</Label>
                <div className="containerRow">
                  <img className="invest-currencyIcon" src="../../../../public/img/icons/dollarSign.png" />
                  <Input 
                    type="Number"
                    placeholder= '0'
                    value={this.state.addAmount}
                    onChange={e => this.handleChange(e)}
                  />
                </div>
              </FormGroup>
            </Col>
          </Form>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleFormSubmit} >
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddFunds;
