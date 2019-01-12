import React, { Component } from 'react';

import FactItem from './FactItem';

import s from './about.module.css';
import jack2 from '../../Assets/jack2.jpg';

const aboutFacts = {
  Born: "July 26, 1989 in Indianapolis Indiana.",
  Education: "University of Illinois Champaign-Urbana. Majored in History.",
  CodingCamp: "Went to Hack Reactor at the Beginning of 2018",
  Cats: "I have two grey cats. But neither are the one in the picture to the left",
  RocketLeague: "I play way too much Rocket League",
  Basketball: "My favorite team is the Chicago Bulls. But they are currently trash.",
  Food: "My favorite food is Thai Curry.",
  Evanston: "I grew up in Evanston, Il. First suburb north of Chicago.",
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
            <div className={s.description}>
              <div className={s.name}>
                JACK VAUGHT
              </div>
              <div className={s.job}>
                Software Engineer
              </div>
            {Object.keys(aboutFacts).map((key, index) => {
              return (
                <FactItem
                  key={index}
                  category={key}
                  index={index}
                  fact={aboutFacts[key]} />
              )
            })}
            </div>
            {/* <div className={s.imageContainer}> */}
              <img 
                alt={'jack vaught should be here...'} 
                className={s.image}
                src={jack2} />
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
