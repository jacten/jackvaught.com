import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";

import Landing from './Components/Landing/Landing';
import Main from './Components/Main/Main';
import NotFound from './Components/NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/main" component={Main}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
