import React from 'react';

import { IconX } from '../../Icons';
import s from './modal.module.css';

const Modal = ({toggle, image}) => {
  return (
    <div className={s.container} onClick={toggle}>
      <img className={s.image} src={image} alt={'Broken :('}/>
      <IconX className={s.x} />
    </div>
  )
};

export default Modal;