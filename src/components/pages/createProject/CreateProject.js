import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Button, Form } from 'react-bootstrap';
import { Col, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
import API_URL from '../../../config.js';

class CreateProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      country: '',
      description: '',
      minimumAmount: 0,
      targetAmount: 0,
      minimumInvestment: 0,
      expectedReturn: 0,
      investmentPeriod: 0,
      paymentPeriod: 0,
      periodicity: 0, 
      picture: '',
      contactName: '',
      contactEmail: '',
      contactPhone: 0
    }

    this.createNewProject = this.createNewProject.bind(this);
  }

  componentDidMount() {
    this.setState({ owner: this.props.userInSession._id });
  }

  handleChange(event) {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  createNewProject() {
    const { owner, name, country, energySource, description, minimumAmount, targetAmount, minimumInvestment, expectedReturn, investmentPeriod, paymentPeriod, periodicity, picture } = this.state;
    axios.post(`${API_URL}/projects`, { owner, name, country, energySource, description, minimumAmount, targetAmount, minimumInvestment, expectedReturn, investmentPeriod,paymentPeriod, periodicity, picture }, {withCredentials: true});
    this.setState({redirect: true});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/myProjects" />;
    } else {
        return (<div>
          <Form className="form">
            <Col>
              <FormGroup>
                <Label>Name</Label>
                <Input
                  type="text"
                  name="name"
                  maxLength="24"
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
                  value={this.state.description}
                  onChange={ e => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label>Minimum amount</Label>
                <Input
                  type="number"
                  name="minimumAmount"
                  value={this.state.minimumAmount}
                  onChange={ e => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label>Target amount</Label>
                <Input
                  type="number"
                  name="targetAmount"
                  value={this.state.targetAmount}
                  onChange={ e => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label>Minimum investment</Label>
                <Input
                  type="number"
                  name="minimumInvestment"
                  value={this.state.minimumInvestment}
                  onChange={ e => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label>Return</Label>
                <Input
                  type="number"
                  name="expectedReturn"
                  value={this.state.expectedReturn}
                  onChange={ e => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label>Investment period (months)</Label>
                <Input
                  type="number"
                  name="investmentPeriod"
                  value={this.state.investmentPeriod}
                  onChange={ e => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label>Operating period (months)</Label>
                <Input
                  type="number"
                  name="paymentPeriod"
                  value={this.state.paymentPeriod}
                  onChange={ e => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label>Payment periodicity (months)</Label>
                <Input
                  type="number"
                  name="periodicity"
                  value={this.state.periodicity}
                  onChange={ e => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label>Picture</Label>
                <Input
                  type="String"
                  name="picture"
                  value={this.state.picture}
                  onChange={ e => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label>Contact name</Label>
                <Input
                  type="String"
                  name="contactName"
                  value={this.state.contactName}
                  onChange={ e => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label>Contact email</Label>
                <Input
                  type="email"
                  name="contactEmail"
                  value={this.state.contactEmail}
                  onChange={ e => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label>Contact phone</Label>
                <Input
                  type="Number"
                  name="contactPhone"
                  value={this.state.contactPhone}
                  onChange={ e => this.handleChange(e)}
                />
              </FormGroup>
            </Col>
          </Form>
          <Button variant="primary" onClick={this.createNewProject}>Create</Button>
        </div>)
    }
  }
}

export default CreateProject;
