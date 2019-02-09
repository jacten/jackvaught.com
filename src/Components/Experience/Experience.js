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
      class: s.card,
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }
  
  isInViewport = (offset = 0) => {
    if (!this.cardElement) return false;
    const top = this.cardElement.getBoundingClientRect().top;
    return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
  }

  handleScroll = (event) => {
    if (this.isInViewport()) {
      this.setState({
        class: `${s.card} ${s.scroll}`
      })
    window.removeEventListener('scroll', this.handleScroll)
    }
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
        <div ref={(cardElement) => {this.cardElement = cardElement}} className={this.state.class}>
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