import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="center">
        <div className="title">
          <div className="name">jackvaught</div>
          <div className="about">software engineer</div>
        </div>
        <div className="buttons">
          <a className="button" href={'https://twitter.com/Jack_Vaught'}>twitter</a>
          <a className="button" href={'https://github.com/jacten'}>github</a>
        </div>
      </div>
    );
  }
}

export default Landing;
