import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from 'react-router-scroll-top'

ReactDOM.render((
<Router> 
    <ScrollToTop>
      <App/>
    </ScrollToTop>
</Router> 
), document.getElementById('root'));