import React, { Component } from 'react';
import { Button, Modal, Form} from 'react-bootstrap';
import './Invest.css';
import { Col, FormGroup, Label, Input} from 'reactstrap';
import InvService from '../../investments/inv-service.js';

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
      investor: '',
      project:'',
      invAmount: ''
    };
    this.service = new InvService();
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
    event.preventDefault();
    const investor = this.props.userInSession._id;
    // console.log('user in session invest', investor)
    const project = this.props.data._id;
    // console.log('project invest', project)
    const invAmount = this.state.invAmount;
    // console.log('invAmount invest', invAmount)

    
    this.service.invest(investor, project, invAmount)
    .then((response) => {
        this.setState({ investor: '', project: '', invAmount: '' });

        // have to pass the getUser function via props
        this.props.getUser(response);
        this.handleClose();
      })
      .catch(error => console.log(error));
  }

  changeAmount(event) {
    const { value } = event.target
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
                className="btnBgColorSecondary invest-boxes center-text"
                onClick={this.changeAmount} value={this.props.data.minimumInvestment}>
                {this.props.data.minimumInvestment} $</Button>
                <Button variant="primary" 
                className="btnBgColorSecondary invest-boxes center-text"
                onClick={this.changeAmount} value={this.props.data.minimumInvestment * 2}>
                {this.props.data.minimumInvestment * 2} $</Button>
                <Button variant="primary" 
                className="btnBgColorSecondary invest-boxes center-text"
                onClick={this.changeAmount} value={this.props.data.minimumInvestment * 5}>
                {this.props.data.minimumInvestment * 5} $</Button>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label className="invest-labelMarg1">Amount</Label>
                <div className="containerRow">
                  <img className="invest-currencyIcon" src="../../../../public/img/icons/dollarSign.png" />
                  <Input 
                    type="Number"
                    placeholder= {`${this.props.data.minimumInvestment} min.`}
                    value={this.state.invAmount}
                    onChange={e => this.handleChange(e)}
                  />
                </div>
              </FormGroup>
            </Col>
          </Form>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleFormSubmit} >
              Send
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Invest;