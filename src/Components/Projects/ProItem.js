import React from 'react';

import s from './proItem.module.css';

const ProItem = ({project}) => {
  const {name, link, about, techstack, image} = project;
  return (
    <div>
      <img src={image} alt={name} className={s.image}/>
    </div>
  );
};

export default ProItem;