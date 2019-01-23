import natemoji from '../Assets/natemoji.png';
import mmm1 from '../Assets/mmm1.png';
import matchame1 from '../Assets/matchame1.png';
import instasmurf from '../Assets/instasmurf.png';

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
    image: natemoji,
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
    image: mmm1,
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
    image: matchame1,
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
    image: instasmurf,
  },
];