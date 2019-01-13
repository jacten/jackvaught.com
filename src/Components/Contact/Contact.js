import React, { Component } from 'react';

import s from './contact.module.css';

class Contact extends Component {
  
  render() {
    return (
      <div className={s.container} id={"contact"}>
        <div className={s.title}>
          contact
        </div>
      </div>
    )
  }
}

export default Contact;