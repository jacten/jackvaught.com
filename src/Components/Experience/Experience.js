import React, { Component } from 'react';

import Title from '../Title/Title';
import Job from './Job';
import experienceData from '../../Data/experienceData';
import s from './experience.module.css';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      active: 0,
      height: 0,
    };
  }

  resizeHeight = () => {
    const element = this.cardElement;
    const currentHeight = element.clientHeight;
    let nextHeight

    requestAnimationFrame(function() {
    nextHeight = element.scrollHeight;
    })

    requestAnimationFrame(function() {
      element.style.height = currentHeight + 'px';
      
      requestAnimationFrame(function() {
        element.style.height = nextHeight + 'px';
      });
      
      element.addEventListener('transitionend', function eventListener(e) {
          element.removeEventListener('transitionend', eventListener);
          element.style.height = null;
        });
    })
  }

  handleJobClick = (jobIndex) => {
    if (jobIndex !== this.state.active) {
      this.setState({
        active: jobIndex,
      })
    }
    this.resizeHeight();
  }
  

  render() {
    return (
      <div className={s.container} id={"experience"}>
        <Title page={'experience'}/>
        <div ref={(cardElement) => {this.cardElement = cardElement}} className={s.card}>
          <div className={s.sideNav}>
          {
            experienceData.map((job, index) => {
              return (
                <div className={s.buttonBox} key={index}>
                  <div 
                    className={s.button} 
                    onClick={() => this.handleJobClick(index)} 
                    key={index}>{job.shortened}
                  </div>
                </div>
              )
            })
          }
          </div>
          <Job item={experienceData[this.state.active]}/>
        </div>
      </div>
    );
  }
}

export default Experience;