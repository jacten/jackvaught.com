import React, { Component } from 'react';

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
          <a className={s.button} href={"#about"}>
            &#8964;
          </a>
        </div>
      </div>
    );
  }
}

export default Landing;
