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
    name: 'Natemoji for Android',
    link: 'https://youtu.be/u3wpiLeOVtI?t=208',
    about: [
      'An emoji app for iOS and Android',
      'I ported the existing Natemoji to Android from iOS',
      'I also updated the assets and for the iOS version and published both to the App Store and Google Play Store',
    ],
    techstack: [
      'Java',
      'Swift',
      'Android Studio',
      'Google Play Store',
    ],
    image: natemoji,
  },
  {
    name: 'MatchaMe (Mobile)',
    link: 'https://github.com/jacten/MobileMM',
    about: [

    ],
    techstack: [

    ],
    image: mmm1,
  },
  {
    name: 'MatchaMe (WebApp)',
    link: 'https://github.com/the-storage-room/MatchaMe',
    about: [

    ],
    techstack: [

    ],
    image: matchame1,
  },
  {
    name: 'InstaSmurf',
    link: 'https://github.com/quadReactor/papaRepo',
    about: [

    ],
    techstack: [

    ],
    image: instasmurf,
  },
];