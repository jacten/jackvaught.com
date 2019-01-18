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
                Yo. I'm Jack! I am a full stack software engineer based out of Los Angeles.
              </div>
              <div className={s.text}>
                I have always been a creative person. From music production, to writing screenplays, and now to designing and building unique web apps without relying on other libraries. 
              </div>
              <div className={s.text}>I am also a very logical person. I have always been good at math and nearly went to law school. This sort of logical deduciton allows me to quickly understand new techonology and solve complex problems.
              </div>
            <div className={s.text}>When I am not coding, I enjoy cooking, NBA basketball, and Rocket League.
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
