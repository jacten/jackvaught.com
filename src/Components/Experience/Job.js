import React from 'react';

import s from './job.module.css';

const Job = ({item}) => {
  const {company, title, dates, location}= item;
  return (
    <div className={s.container}>{company}</div>
  )
}

export default Job;