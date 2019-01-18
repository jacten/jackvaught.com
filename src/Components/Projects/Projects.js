import React, { Component } from 'react';

import Title from '../Title/Title';
import ProItem from './ProItem';

import natemoji from '../../Assets/natemoji.png';
import mmm1 from '../../Assets/mmm1.png';
import matchame1 from '../../Assets/matchame1.png';
import instasmurf from '../../Assets/instasmurf.png';
import s from './projects.module.css';

class Projects extends Component {
  
  render() {
    return (
      <div className={s.container} id={"projects"}>
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

const projectData = [
  {
    name: 'Natemoji',
    link: '',
    github: '',
    about: [

    ],
    techstack: [

    ],
    image: natemoji,
  },
  {
    name: 'Natemoji',
    link: '',
    github: '',
    about: [

    ],
    techstack: [

    ],
    image: mmm1,
  },
  {
    name: 'Natemoji',
    link: '',
    github: '',
    about: [

    ],
    techstack: [

    ],
    image: matchame1,
  },
  {
    name: 'Natemoji',
    link: '',
    github: '',
    about: [

    ],
    techstack: [

    ],
    image: instasmurf,
  },
];