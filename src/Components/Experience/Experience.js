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
    };
  }

  handleJobClick = (jobIndex) => {
    if (jobIndex !== this.state.active) {
      this.setState({
        active: jobIndex,
      })
    }
  }

  render() {
    return (
      <div className={s.container} id={"experience"}>
        <Title page={'experience'}/>
        <div className={s.card}>
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