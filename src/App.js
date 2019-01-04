import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";

import Landing from './Components/Landing/Landing';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';

import NotFound from './Components/NotFound/NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/experience" component={Experience}/>
          <Route path="/projects" component={Projects}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
