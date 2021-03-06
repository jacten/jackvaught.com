import natemoji1 from '../Assets/natemoji/natemoji.png';
import natemoji2 from '../Assets/natemoji/natemoji2.jpg';
import natemoji3 from '../Assets/natemoji/natemoji3.PNG';

import mmm1 from '../Assets/mmm/mmm1.png';
import mmm2 from '../Assets/mmm/mmm2.png';
import mmm3 from '../Assets/mmm/mmm3.png';
import mmm4 from '../Assets/mmm/mmm4.png';
import mmm5 from '../Assets/mmm/mmm5.png';

import mm1 from '../Assets/mm/mm1.png';
import mm2 from '../Assets/mm/mm2.png';
import mm3 from '../Assets/mm/mm3.png';
import mm4 from '../Assets/mm/mm4.png';
import mm5 from '../Assets/mm/mm5.png';

import instasmurf from '../Assets/instasmurf/instasmurf.png';

export default [
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
    image: [
      natemoji1,
      natemoji2,
      natemoji3,
    ],
  },
  {
    name: 'MatchaMe (android/iOS)',
    link: 'https://github.com/jacten/MobileMM',
    about: [
      'Mobile version of MatchaMe.',
      'Users are rated on a scale from 1 - 10. An algorithm then generates potential matches based on that average score and those are presented to the users.',
      'I built a lot of reusable components such as an image carousel.',
    ],
    techstack: [
      'React-Native',
      'React Navigation',
    ],
    image: [
      mmm1,
      mmm2,
      mmm3,
      mmm4,
      mmm5,
    ],
  },
  {
    name: 'MatchaMe (web)',
    link: 'https://github.com/the-storage-room/MatchaMe',
    about: [
      'Web version of MatchaMe.',
      'Has a gamified approach to matchmaking where users gain or lose points depending on how sucsessful the matches they vote on are.'
    ],
    techstack: [
      'React',
      'socket.io',
      'mySQL',
    ],
    image: [
      mm1,
      mm2,
      mm3,
      mm4,
      mm5,
    ],
  },
  {
    name: 'InstaSmurf',
    link: 'https://github.com/quadReactor/papaRepo',
    about: [
      `An instagram clone with, for some reason, a Smurf theme.`,
      `I did the CSS in an exagerated cartoon theme. Not exactly modern design but I kinda like it.`
    ],
    techstack: [
      'React',
      'NodeJS',
      'mongoDB',
    ],
    image: [
      instasmurf
    ],
  },
];