import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";

import Landing from './Components/Landing/Landing';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/home" component={Home}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
