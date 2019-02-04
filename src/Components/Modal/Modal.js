import React from 'react';

import { IconX, IconLeft, IconRight } from '../../Icons';
import s from './modal.module.css';

const Modal = ({toggle, image, left, right}) => {
  return (
    <div className={s.container}>
      <div className={s.holder}>
        <IconLeft className={s.arrow} onClick={left}/>
        <img className={s.image} src={image} alt={'Broken :('}/>
        <IconRight className={s.arrow} onClick={right}/>
      </div>
      <IconX className={s.x} onClick={toggle} />
    </div>
  )
};

export default Modal;