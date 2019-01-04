import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './Landing.css';
import '../../globals.css';

class Landing extends Component {
  render() {
    return (
      <div className="center">
        <div className="title">
          <div className="name">jackvaught</div>
          <div className="about">software engineer</div>
        </div>
        <div className="buttons">
          <Link className="button" to="/home"> ENTER </Link>
        </div>
      </div>
    );
  }
}

export default Landing;
