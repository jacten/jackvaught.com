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
      'I ported the existing iOS Natemoji to Android. I also updated the assets and for the iOS version and published both to the App Store and Google Play Store',
    ],
    techstack: [
      'Java',
      'Swift',
    ],
    image: natemoji,
  },
  {
    name: 'MatchaMe (andoid/iOS)',
    link: 'https://github.com/jacten/MobileMM',
    about: [
      'Matchmaking/Dating app.',
      'I built a lot of reusable components such as an image carousel',
    ],
    techstack: [
      'React-Native',
      'React Navigation',
    ],
    image: mmm1,
  },
  {
    name: 'MatchaMe (web)',
    link: 'https://github.com/the-storage-room/MatchaMe',
    about: [
      'Web version of MatchaMe.',
      'Users are rated on a scale from 1 - 10. An algorithm then generates potential matches based on that average score and those are presented to the users.'
    ],
    techstack: [
      'React',
      'socket.io',
      'mySQL',
    ],
    image: matchame1,
  },
  {
    name: 'InstaSmurf',
    link: 'https://github.com/quadReactor/papaRepo',
    about: [
      `An instagram clone with, for reasons unknown to me, a Smurf theme. Was built as my 'greenfield' project at Hack Reactor. I did all of the CSS in an exagerated cartoon like theme. Not exactly modern design but I like it.`
    ],
    techstack: [
      'React',
      'NodeJS',
      'mongoDB',
    ],
    image: instasmurf,
  },
];