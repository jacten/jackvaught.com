import React, { Component } from 'react';

import email from '../../Assets/email.png';

import s from './contact.module.css';

class Contact extends Component {
  
  render() {
    return (
      <div className={s.container} id={"contact"}>
        <div className={s.title}>
          contact
        </div>
        <div className={s.body}>
          <span className={s.helper}/>
          <img className={s.img} src={email} alt={"email me!"}/>
        </div>
      </div>
    )
  }
}

export default Contact;