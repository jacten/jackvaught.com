import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import SideNav from '../SideNav/SideNav';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import NotFound from '../NotFound/NotFound';
import s from './main.module.css';

class Home extends Component {
  render() {
    return (
      <div>
        <SideNav/>
        <Switch>
          <Redirect exact from='/main' to='/main/about'/>
          <Route exact component={About} path="/main/about" />
          <Route exact component={Projects} path="/main/projects" />
          <Route exact component={Experience} path="/main/experience" />
          <Route exact component={Contact} path="/main/contact" />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Home;