import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import s from './sidenav.module.css';

class SideNav extends Component {
  
  render() {
    return (
      <div className={s.container}>
        <div className={s.title}>jackvaught</div>
        <div className={s.navContainer}>
          <Link className={s.link} to="/main/about">About</Link>
          <Link className={s.link} to="/main/projects">Projects</Link>
          <Link className={s.link} to="/main/experience">Experience</Link>
          <Link className={s.link} to="/main/contact">Contact</Link>
        </div>
      </div>
    );
  }
}

export default SideNav;