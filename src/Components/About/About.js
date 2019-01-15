import React, { Component } from 'react';


import s from './about.module.css';
import jack2 from '../../Assets/jack2.jpg';

class About extends Component {

  render() {
    return (
      <div className={s.container} id={"about"}>
        <div className={s.title}>
          about
        </div>
        <div className={s.body}> 
          <div className={s.card}>
            <div className={s.description}>
              <div className={s.name}>
                JACK VAUGHT
              </div>
              <div className={s.job}>
                Software Engineer
              </div>
              <div className={s.text}>
                I'm Jack!
              </div>
              <div className={s.text}>
                I am a full stack software engineer based out of Los Angeles. I am currently looking for my next career opportunity!
              </div>
              <div className={s.text}>
                I was born in Indiana, raised in Chicago (well really Evanston), and have lived on the West Coast for the past seven years.
              </div>
              <div className={s.text}>
              I have a Russian wife and two Russian Blue Cats (not pictured). I enjoy cooking, NBA basketball, and Rocket League. 
              </div>
            </div>
            <img 
              alt={'jack vaught should be here...'} 
              className={s.image}
              src={jack2} />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
