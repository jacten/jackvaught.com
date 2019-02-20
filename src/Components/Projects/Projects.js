import React, { Component } from 'react';

import Title from '../Title/Title';
import ProItem from './ProItem';
import { addRef } from '../../Utils/Scroll';
import projectData from '../../Data/projectData';

import s from './projects.module.css';

class Projects extends Component {

  componentDidMount = () => {
    addRef('projects', this.projectElement);
  }
  
  render() {
    return (
      <div ref={(el) => {this.projectElement = el}} className={s.container} id={"projects"}>
        <Title page={'projects'}/>
        <div className={s.body}>
          {
            projectData.map((project, index) => {
              return <ProItem project={project} key={index}/>
            })
          }
        </div>
      </div>
    );
  }
}

export default Projects;