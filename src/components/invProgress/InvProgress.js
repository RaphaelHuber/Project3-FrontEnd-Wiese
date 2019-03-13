import React, { Component } from 'react';
import './InvProgress.css';
import { ProgressBar } from 'react-bootstrap';

class InvProgress extends Component {
  render() {

    // const minimum = this.props.project.minimumAmount;
    const target = this.props.project.targetAmount;
    const raised = this.props.project.raisedAmount;

    // const minimumPct = Math.floor(minimum / target);
    const raisedPct = Math.floor(raised / target * 100);

    // const minimumNow = Math.min(minimumPct, raisedPct);

    return (
      <ProgressBar className="invProgress-style">
        {/* <ProgressBar striped variant="warning" now={20} label={`${minimumPct}%`} key={1} animated={true}/> */}
        <ProgressBar striped variant="success" now={raisedPct} label={`${raisedPct}%`} key={1} animated={true} />
      </ProgressBar>
    );
  }
}


export default InvProgress;
