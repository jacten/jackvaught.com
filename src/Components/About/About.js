import React, { Component } from 'react';

import s from './about.module.css';
import jack2 from '../../Assets/jack2.jpg';

const aboutFacts = {
  Born: "July 26, 1989 in Indianapolis Indiana.",
  Education: "University of Illinois Champaign-Urbana. Majored in History.",
  CodingCamp: "Went to Hack Reactor at the Beginning of 2018",
}

class About extends Component {

  render() {
    return (
      <div className={s.container}>
        <div className={s.title}>
          about
        </div>
        <div className={s.body}> 
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
          <div className={s.card2}>
            <div className={s.card2head}>
              3 Random Facts!
              <button>
                shuffle
              </button>
            </div>
            {Object.keys(aboutFacts).map((key, index) => {
              return (
                <div>
                  {key}: {aboutFacts[key]}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
