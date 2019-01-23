import React, { Component } from 'react';

import Title from '../Title/Title.js';
import aboutData from '../../Data/aboutData';
import jack from '../../Assets/jack2.jpg';
import s from './about.module.css';

class About extends Component {

  render() {
    return (
      <div className={s.container} id={"about"}>
        <Title page={'about'}/>
        <div className={s.body}> 
          <div className={s.card}>
            <div className={s.description}>
              <div className={s.name}>
                JACK VAUGHT
              </div>
              <div className={s.job}>
                Software Engineer
              </div>
              {
                aboutData.map((sentence, index) => (
                  <div className={s.text} key={index}>
                    {sentence}
                  </div>
                ))
              }
            </div>
            <img 
              alt={'jack vaught should be here...'} 
              className={s.image}
              src={jack} />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
