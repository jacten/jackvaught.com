import React from 'react';

import s from './title.module.css';

const Title = ({page}) => {
  return (
    <div className={s.title}>{page}</div>
  )
}

export default Title;