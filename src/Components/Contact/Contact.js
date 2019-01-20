import React, { Component } from 'react';

import Title from '../Title/Title.js';
import s from './contact.module.css';

import { 
  IconGithub, 
  IconLinkedin, 
  IconInstagram, 
  IconTwitter, 
  IconGmail, 
  IconCopy, 
  IconLink,
} from '../Icons';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      status: 'Copy?',
    }
  }

  copyToClipboard = (e) => {
    this.textArea.select();
    document.execCommand('copy');
    this.setState({ copySuccess: 'copied!' });
  };
  
  render() {
    return (
      <div className={s.container} id={"contact"}>
        <Title page={'contact'}/>
        <div className={s.body}>
          <div className={s.card}>
            {
              contactData.map((contact, index) => {
                return (
                  <div key={index} className={s.contact}>
                    <div className={s.iconDiv}>
                      {contact.icon(s.icon)}
                    </div>
                      <div className={s.copyDiv}>
                      <IconCopy className={s.copy}/>
                      </div>
                      <div className={s.linkDiv}>
                      <IconLink className={s.link}/>
                      </div>
                  </div>
                )
              })
            }
          </div>
          <div className={s.status}>
            Hit Me Up!
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;

const contactData = [
  {
    site: 'Github',
    link: 'https://github.com/jacten',
    username: 'github.com/jacten',
    icon: (className = '') => <IconGithub className={className}/>,
  },
  {
    site: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jmvaught/',
    username: 'linkedin.com/in/jmvaught/',
    icon: (className = '') => <IconLinkedin className={className}/>,
  },
  {
    site: 'Twitter',
    link: 'https://twitter.com/Jack_Vaught',
    username: 'twitter.com/Jack_Vaught',
    icon: (className = '') => <IconTwitter className={className}/>,
  },
  {
    site: 'Instagram',
    link: 'https://www.instagram.com/jackvaught/',
    username: 'instagram.com/jackvaught/',
    icon: (className = '') => <IconInstagram className={className}/>,
  },
  {
    site: 'Gmail',
    link: 'mailto:johnmvaught@gmail.com',
    username: 'johnmvaught@gmail.com',
    icon: (className = '') => <IconGmail className={className}/>,  
  },
];

            // {/* <div className={s.contact}>
            //   <form>
            //     <textarea
            //       readOnly
            //       className={s.textarea}
            //       ref={(textarea) => this.textArea = textarea}
            //       value='johnmvaught@gmail.com'
            //     />
            //   </form>
            //   <div className={s.link} onClick={this.copyToClipboard}>
            //     {/* <div>
            //       {this.state.copySuccess}
            //     </div> */}
            //     <div>
            //       <img className={s.icon} src={email} alt={"email me!"}/>
            //       <span className={s.text}>johnmvaught@gmail.com</span>
            //     </div>
            //   </div>
            // </div>
            // <div className={s.contact}>
            //   Twitter
            // </div>
            // <div className={s.contact}>
            //   Github
            // </div>
            // <div className={s.contact}>
            //   LinkedIn
            // </div> */}