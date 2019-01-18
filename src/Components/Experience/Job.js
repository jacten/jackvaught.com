import React from 'react';

import s from './job.module.css';

const Job = ({item}) => {
  const {company, title, dates, location, bullets}= item;
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.company}>
          {company}
        </div>
        <div className={s.title}>
          {title}
        </div>
        <div className={s.dates}>
          {dates}
        </div>
        <div className={s.location}>
          {location}
        </div>
      </div>
      <div className={s.bullets}>
        {
          bullets.map((bullet, index)=> {
            return (
              <div className={s.bullet} key={index}>
              &#8226; {bullet}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Job;