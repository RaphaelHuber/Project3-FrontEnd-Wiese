import React, { Component } from 'react';
import { Form, FormControl} from 'react-bootstrap';

class NameFilter extends Component {
  constructor(props){
    super(props)
    this.state = {
      barInput: ''
    }
  }
  
  handleChange(event) {
    const { value } = event.target;
    // this.setState({barInput: value});
    this.props.filterProjectsByName(value)
  }

  render () {
    return (
      <Form inline>
        <FormControl type="text" placeholder="Search" onChange={ e => this.handleChange(e)}/>
      </Form>
    )
  }
}

export default NameFilter;
