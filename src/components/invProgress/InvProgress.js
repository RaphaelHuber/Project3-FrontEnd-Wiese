import React, { Component } from 'react';
import './InvProgress.css';
import { ProgressBar } from 'react-bootstrap';

class InvProgress extends Component {
  render() {
    return (
      <ProgressBar className="invProgress-style">
        <ProgressBar striped variant="warning" now={20} label={`${20}%`} key={1} animated={true}/>
        <ProgressBar striped variant="success" now={35} label={`${35}%`} key={2} animated={true} />
      </ProgressBar>
    );
  }
}


export default InvProgress;
