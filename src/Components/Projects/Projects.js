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
      'I ported the existing Natemoji to Android from iOS.',
      'I also updated the assets and for the iOS version and published both to the App Store and Google Play Store',
      'Unfortunately SuperDeluxe went out of business a month after it launched so it is only available on my phone or any of the hundreds of people who downloaded it.'
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
      'Mobile version of MatchaMe, a matchmaking/dating app where users are rate other users on a scale from 1 - 10. An algorythem then generates potential matches based on that average score and those are presented to the users.',
      'Shared a majority of the back-end with the web version. ',
    ],
    techstack: [
      'React-Native',
      'React Navigation',
      'Express/Node'
    ],
    image: mmm1,
  },
  {
    name: 'MatchaMe (WebApp)',
    link: 'https://github.com/the-storage-room/MatchaMe',
    about: [
      'Web version of MatchaMe. Was built as thesis project for Hack Reactor with my team. I fell in love with the idea which lead me to creating the mobile version. Still debating if I should release it.'
    ],
    techstack: [
      'React',
      'Express',
      'CSS grids',
      'socket.io',
      'mySQL',
    ],
    image: matchame1,
  },
  {
    name: 'InstaSmurf',
    link: 'https://github.com/quadReactor/papaRepo',
    about: [
      `An instagram clone with, for reasons unknown to me, a Smurf theme. Was built as my 'greenfield' project at Hack Reactor. I did all of the CSS in an exagerated cartoon like theme. Not exactly modern design but not the worst.`
    ],
    techstack: [
      'React',
      'NodeJS',
      'firebase',
      'mongoDV',
    ],
    image: instasmurf,
  },
];