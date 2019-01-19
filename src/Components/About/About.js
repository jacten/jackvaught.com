import React, { Component } from 'react';

import Title from '../Title/Title.js';
import s from './about.module.css';
import jack from '../../Assets/jack2.jpg';

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
              <div className={s.text}>
                Yo. I'm Jack! I am a full-stack software engineer based out of Los Angeles, CA.
              </div>
              <div className={s.text}>
                From music production to writing screenplays, I have always been a creative person. I see software development as an extention of that creativity. 
              </div>
              <div className={s.text}>
                This is V1 of the site. It is a work in progress. Scrolling uses CSS scroll-behavior which isn't compatible on all browsers. I may do this the javascript way, or maybe not... <span>🤷‍</span>
              </div>
              <div className={s.text}>When I am not coding, I enjoy cooking, NBA basketball, and Rocket League. Mostly just a lot of Rocket League. 
              </div>
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
