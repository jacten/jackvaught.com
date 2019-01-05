import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import s from './sidenav.module.css';

class SideNav extends Component {
  
  render() {
    return (
      <div>
        Side Nav
        <Link to='/about'> About </Link>
      </div>
    );
  }
}

export default SideNav;