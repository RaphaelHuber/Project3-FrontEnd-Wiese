import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

class MyProjects extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Link to='/createProject'>
        <Button variant="primary">New project</Button>
      </Link>
    );
  }
}

export default MyProjects;
