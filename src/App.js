import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Landing from './Components/Landing/Landing';
import NotFound from './Components/NotFound/NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
