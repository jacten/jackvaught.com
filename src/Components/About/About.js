import React, { Component } from 'react';

import s from './about.module.css';
import jack2 from '../../Assets/jack2.jpg';

class About extends Component {

  render() {
    return (
      <div className={s.container}>
        <div className={s.title}>
          about
        </div>
        <div className={s.card}>
          <div className={s.imagebox}>
            <img 
              alt={'jack vaught should be here...'} 
              className={s.image}
              src={jack2} />
          </div>
            <div className={s.description}>
              <div className={s.name}>
                JACK VAUGHT
              </div>
              <div className={s.job}>
                Software Engineer
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default About;
