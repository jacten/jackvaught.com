import React, { Component } from 'react';

import Title from '../Title/Title.js';

import s from './experience.module.css';

class Experience extends Component {
  
  render() {
    return (
      <div className={s.container} id={"experience"}>
        <Title page={'experience'}/>
      </div>
    );
  }
}

export default Experience;