import React, { Component } from 'react';

import Title from '../Title/Title';
import Job from './Job';
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
            jobData.map((job, index) => {
              return (
                <div className={s.buttonBox}>
                  <div 
                    className={s.button} 
                    onClick={() => this.handleJobClick(index)} 
                    key={index}>{job.company}
                  </div>
                </div>
              )
            })
          }
          </div>
          <Job item={jobData[this.state.active]}/>
        </div>
      </div>
    );
  }
}

export default Experience;

const jobData = [
  {
    company: 'Super Deluxe',
    title: 'Lead Software Engineer',
    dates: '2018',
    location: 'Los Angeles, CA',
    bullets: [
      'Designed and built live interactivity features that integrated with Facebook API for streams with 1000+ viewers',
      'Built out superdeluxe.com/watch and redesigned apps.superdeluxe.com pages and maintained main website',
      'Deployed staging server for live-kit API and established better tech to user development pipeline through improved release management, new feature demos, and weekly feedback meetings'
    ],
  },
  {
    company: 'Edmunds.com, Inc',
    title: 'Vehicle Data Editor',
    dates: '2012 - 2017',
    location: 'Santa Monica, CA',
    bullets: [
      'Verified and maintained content for website with 14 million unique monthly visitors',
      'Improved UX of new and legacy data entry/publishing systems with offshore development team',
      'Improved efficiency by analyzing year-to-date performance using SQL queries',
    ],
  },
  {
    company: 'Northwestern University',
    title: 'IT Assistant - School of Education and Social Policy',
    dates: '2012',
    location: 'Evanston, IL',
    bullets: [
      'Managed data migration from internal server to box.com',
      'Set up Mobile Device Management (MDM) systems on hundreds of iPads',
    ],
  },
];