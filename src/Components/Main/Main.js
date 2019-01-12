import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

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
        <div className={s.sidenav}>
          <SideNav/>
        </div>
        <div className={s.main}>
          <Switch>
            <Route exact component={About} path="/main/about" />
            <Route exact component={Projects} path="/main/projects" />
            <Route exact component={Experience} path="/main/experience" />
            <Route exact component={Contact} path="/main/contact" />
            <Redirect from='/main' to='/main/about'/>
          </Switch>
        </div>
        <div className={s.footer}>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Home;