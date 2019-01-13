import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Landing from '../Landing/Landing';
import SideNav from '../SideNav/SideNav';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Footer from '../Footer/Footer';

import s from './main.module.css';

class Home extends Component {
  render() {
    return (
      <div className={s.app}>
        <div className={s.footer}>
          <Landing />
        </div>
        <div className={s.sidenav}>
          <SideNav/>
        </div>
        <div className={s.main}>
          <About/>
          <Projects/>
          <Experience/>
          <Contact/>
        </div>
        <div className={s.footer}>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Home;