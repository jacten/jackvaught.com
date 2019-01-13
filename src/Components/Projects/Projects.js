import React, { Component } from 'react';

import s from './projects.module.css';

class Projects extends Component {
  
  render() {
    return (
      <div className={s.container} id={"projects"}>
        <div className={s.title}>
          projects
        </div>
      </div>
    );
  }
}

export default Projects;