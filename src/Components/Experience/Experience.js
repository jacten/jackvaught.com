import React, { Component } from 'react';

import Title from '../Title/Title';
import JobItem from './JobItem';

import s from './experience.module.css';

const jobData = [
  {
    company: 'Super Deluxe',
    title: 'Lead Software Engineer',
    dates: '2018',
    location: 'Los Angeles, CA',
  },
  {
    company: 'Edmunds.com, Inc',
    title: 'Vehicle Data Editor',
    dates: '2012-2017',
    location: 'Santa Monica, CA',
  },
  {
    company: 'Northwestern University',
    title: 'IT Assistant - School of Education and Social Policy',
    dates: '2012',
    location: 'Evanston, IL',
  },
];

class Experience extends Component {

  render() {
    return (
      <div className={s.container} id={"experience"}>
        <Title page={'experience'}/>
        <div className={s.body}>
          {
            jobData.map(item => {
              return <JobItem job={item}/>
            })
          }
        </div>
      </div>
    );
  }
}

export default Experience;