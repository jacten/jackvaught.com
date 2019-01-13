import React, { Component } from 'react';

import s from './experience.module.css';

class Experience extends Component {
  
  render() {
    return (
      <div className={s.container} id={"experience"}>
        <div className={s.title}>
          experience
        </div>
      </div>
    );
  }
}

export default Experience;