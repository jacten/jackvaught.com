import React from 'react';

import { 
  IconGithub, 
  IconLinkedin, 
  IconInstagram, 
  IconTwitter, 
  IconGmail,
} from '../Icons';

export default [
  {
    site: 'Gmail',
    link: 'mailto:johnmvaught@gmail.com',
    copy: 'johnmvaught@gmail.com',
    icon: (className = '') => <IconGmail className={className}/>,  
  },
  {
    site: 'Github',
    link: 'https://github.com/jacten',
    copy: 'github.com/jacten',
    icon: (className = '') => <IconGithub className={className}/>,
  },
  {
    site: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jmvaught/',
    copy: 'linkedin.com/in/jmvaught/',
    icon: (className = '') => <IconLinkedin className={className}/>,
  },
  {
    site: 'Twitter',
    link: 'https://twitter.com/Jack_Vaught',
    copy: 'twitter.com/Jack_Vaught',
    icon: (className = '') => <IconTwitter className={className}/>,
  },
  {
    site: 'Instagram',
    link: 'https://www.instagram.com/jackvaught/',
    copy: 'instagram.com/jackvaught/',
    icon: (className = '') => <IconInstagram className={className}/>,
  },
];