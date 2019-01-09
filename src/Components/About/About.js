import React, { Component } from 'react';

import s from './about.module.css';
import jack from '../../Assets/jack.jpg';

class About extends Component {

  render() {
    return (
      <div className={s.container}>
        <div className={s.title}>
          About
        </div>
        <img 
          alt={'jack vaught should be here...'} 
          className={s.image}
          src={jack} />
        <div className={s.description}>
          Wow! It's Jack Vaught! I make terrible websites... like this one!
        </div>
      </div>
    );
  }
}

export default About;
