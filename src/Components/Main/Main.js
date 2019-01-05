import React, { Component } from 'react';

import SideNav from '../SideNav/SideNav';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import s from './main.module.css';

class Home extends Component {
  render() {
    return (
      <div>
        <SideNav/>
      </div>
    );
  }
}

export default Home;