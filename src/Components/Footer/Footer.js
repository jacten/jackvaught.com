import React, { Component } from 'react';

import s from './footer.module.css';

class Footer extends Component {
  
  render() {
    return (
      <div className={s.footer}>
        <a href={'https://github.com/jacten/jackvaught.com'} className={s.a}>
        &copy; Jack Vaught 2019
        </a>
      </div>
    );
  }
}

export default Footer;