import lakeMain from '../../../public/img/lakeMain.png';
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import './Header.css';

const header = () => {
  return (
    <div className="header">
      <img src={ lakeMain } />
    </div>
  )
}

export default header;
