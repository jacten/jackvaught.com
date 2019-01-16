import React, { Component } from 'react';

import Title from '../Title/Title.js';

import s from './projects.module.css';

class Projects extends Component {
  
  render() {
    return (
      <div className={s.container} id={"projects"}>
        <Title page={'projects'}/>
      </div>
    );
  }
}

export default Projects;