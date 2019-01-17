import React from 'react';

import s from './jobItem.module.css';

const JobItem = ({job}) => {
  const {company, title, dates, location} = job;
  return (
    <div className={s.container}>
      <div className={s.card}>
        {company}
      </div>
    </div>
  );
}

export default JobItem;