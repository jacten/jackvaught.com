import React, { Component } from 'react';
import { scrollTo } from '../../Utils/Scroll';

import s from './landing.module.css';
import '../../globals.css';

class Landing extends Component {
  render() {
    return (
      <div className={s.body}>
        <div>
          <div className={s.name}>jackvaught</div>
          <div className={s.job}>software engineer</div>
        </div>
        <div>
          <a className={s.button} onClick={() => scrollTo('about')}>&#8964;</a>
        </div>
      </div>
    );
  }
}

export default Landing;
