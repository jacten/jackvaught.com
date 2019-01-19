import React from 'react';

import x from '../../Assets/x2.png';
import s from './modal.module.css';

const Modal = ({toggle, image}) => {
  return (
    <div className={s.container} onClick={toggle}>
      <img className={s.image} src={image} alt={'Broken :('}/>
      <img className={s.x} src={x} alt={'close'}/>
    </div>
  )
};

export default Modal;