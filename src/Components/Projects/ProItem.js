import React from 'react';

import s from './proItem.module.css';

const ProItem = ({project}) => {
  const {name, link, about, techstack, image} = project;
  return (
    <div style={{backgroundImage: `url(${image})`}} className={s.card}>
    <div className={s.filter}>
      {/* <img src={image} alt={name} className={s.image}/> */}
    </div>
    </div>
  );
};

export default ProItem;