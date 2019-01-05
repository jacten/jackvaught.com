import React, { Component } from 'react';
import { Link } from "react-router-dom";

import s from './landing.module.css';
import '../../globals.css';

class Landing extends Component {
  render() {
    return (
      <div className={s.center}>
        <div className={s.title}>
          <div className={s.name}>jackvaught</div>
          <div className={s.about}>software engineer</div>
        </div>
        <div className={s.buttons}>
          <Link className={s.button} to="/main"> ENTER </Link>
        </div>
      </div>
    );
  }
}

export default Landing;
