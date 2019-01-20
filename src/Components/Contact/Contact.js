import React, { Component } from 'react';

import Title from '../Title/Title.js';
import s from './contact.module.css';

import { IconGithub, IconLinkedin, IconInstagram, IconTwitter, IconGmail } from '../Icons';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      copySuccess: '',
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
        <div className={s.card}>
          {
            contactData.map((contact, index) => {
              return (
                <a href={contact.link} className={s.contact}>
                  <div key={index}>
                    {contact.icon}
                    {contact.site}
                  </div>
                </a>
              )
            })
          }
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
    icon: <IconGithub/>,
  },
  {
    site: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jmvaught/',
    icon: <IconLinkedin/>,
  },
  {
    site: 'Twitter',
    link: 'https://twitter.com/Jack_Vaught',
    icon: <IconTwitter/>,
  },
  {
    site: 'Instagram',
    link: 'https://www.instagram.com/jackvaught/',
    icon: <IconInstagram/>,
  },
  {
    site: 'johnmvaught@gmail.com',
    link: 'mailto:johnmvaught@gmail.com',
    icon: <IconGmail/>,  
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