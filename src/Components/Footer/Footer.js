import React, { Component } from 'react';

import s from './footer.module.css';

class Footer extends Component {
  
  render() {
    return (
      <div className={s.footer}>
        &copy; Jack Vaught 2019
      </div>
    );
  }
}

export default Footer;