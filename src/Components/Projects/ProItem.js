import React from 'react';

import linkIcon from '../../Assets/link.png';
import s from './proItem.module.css';

const ProItem = ({project}) => {
  const {name, link, about, techstack, image} = project;
  return (
    <div className={s.card}>
      <div className={s.image} style={{backgroundImage: `url(${image})`}}>
        <div className={s.filter}>
          <div className={s.header}>
            <div className={s.name}>
              {name}
              <a href={link} className={s.a}>
                <img src={linkIcon} alt={link} className={s.link}/>
              </a>
            </div>
              {
                techstack.map((tech, index) => {
                  return <div className={s.techstack} key={index}>{tech}</div>
                })
              }
          </div>
          {
            about.map((info, index) => {
              return <div className={s.about} key={index}>{info}</div>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default ProItem;

// <img src={image} alt={name} className={s.image}/>