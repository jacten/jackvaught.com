import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import s from './sidenav.module.css';

class SideNav extends Component {
  
  render() {
    return (
      <div>
        <div>Jack Vaught</div>
        <div className="Nav__right">
        <ul className="Nav__item-wrapper">
          <li className="Nav__item">
            <Link className="Nav__link" to="/main/about">About</Link>
          </li>
          <li className="Nav__item">
            <Link className="Nav__link" to="/main/projects">Projects</Link>
          </li>
          <li className="Nav__item">
            <Link className="Nav__link" to="/main/experience">Experience</Link>
          </li>
          <li className="Nav__item">
            <Link className="Nav__link" to="/main/contact">Contact</Link>
          </li>
        </ul>
        </div>
      </div>
    );
  }
}

export default SideNav;