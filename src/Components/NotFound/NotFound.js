import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './NotFound.css';

class NotFound extends Component {
  render() {
    return (
      <div className="box">
        <div className="link">
          <Link className="link" to="/">
            <div className="header">404</div>
          </Link>
          <Link className="link" to="/">
            <div className="subheader">Welp... this page does not exist.</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default NotFound;
