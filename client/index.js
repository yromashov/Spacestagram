import React from 'react';
import ReactDOM from 'react-dom';
import App from './Spacestagram';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes'

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById('app')
);
