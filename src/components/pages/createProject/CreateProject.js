import React, { Component } from 'react';
import { Button, Navbar, Nav, Form, NavDropdown } from 'react-bootstrap';
import { Col, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';

class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.createNewProject = this.createNewProject.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { owner } = nextProps.userInSession._id;
    this.setState({ owner });
  }

  handleChange(event) {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  createNewProject() {
    const { owner, name, country, energySource, description, minimumAmount, targetAmount, minimumInvestment, expectedReturn, investmentPeriod,paymentPeriod, periodicity, picture } = this.state;
    axios.post(`http://localhost:5000/projects`, { owner, name, country, energySource, description, minimumAmount, targetAmount, minimumInvestment, expectedReturn, investmentPeriod,paymentPeriod, periodicity, picture });
  }

  render() {
    return (<div>
      <Form className="form">
              <Col>
                <FormGroup>
                  <Label>Name</Label>
                  <Input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={ e => this.handleChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Country</Label>
                  <Input
                    type="text"
                    name="country"
                    value={this.state.country}
                    onChange={ e => this.handleChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Description</Label>
                  <Input
                    type="text"
                    name="description"
                    // value={this.state.email}
                    // onChange={ e => this.handleChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Minimum amount</Label>
                  <Input
                    type="number"
                    name="minimumAmount"
                    // value={this.state.email}
                    // onChange={ e => this.handleChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Target amount</Label>
                  <Input
                    type="number"
                    name="targetAmount"
                    // value={this.state.email}
                    // onChange={ e => this.handleChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Minimum investment</Label>
                  <Input
                    type="number"
                    name="minimumInvestment"
                    // value={this.state.email}
                    // onChange={ e => this.handleChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Return</Label>
                  <Input
                    type="number"
                    name="expectedReturn"
                    // value={this.state.email}
                    // onChange={ e => this.handleChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Investment period (months)</Label>
                  <Input
                    type="number"
                    name="investmentPeriod"
                    // value={this.state.email}
                    // onChange={ e => this.handleChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Operating period (months)</Label>
                  <Input
                    type="number"
                    name="paymentPeriod"
                    // value={this.state.email}
                    // onChange={ e => this.handleChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Payment periodicity (months)</Label>
                  <Input
                    type="number"
                    name="periodicity"
                    // value={this.state.email}
                    // onChange={ e => this.handleChange(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Picture</Label>
                  <Input
                    type="String"
                    name="picture"
                    // value={this.state.email}
                    // onChange={ e => this.handleChange(e)}
                  />
                </FormGroup>
              </Col>
            </Form>
            <Button variant="primary" onClick={this.createNewProject}>Create</Button>
          </div>)
  }
}

export default CreateProject;
