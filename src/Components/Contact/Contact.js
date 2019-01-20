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
      value: '',
    }
  }

  preloadTextbox = (copy) => {
    this.setState({
      value: copy
    })
  }

  copyToClipboard = () => {
    this.textArea.select()
    document.execCommand('copy');
    this.setState({ copySuccess: 'copied!' });
  };
  
  render() {
    return (
      <div className={s.container} id={"contact"}>
        <Title page={'contact'}/>
          <form>
            <textarea
              readOnly
              className={s.textarea}
              ref={(textarea) => this.textArea = textarea}
              value={this.state.value}
            />
              </form>
        <div className={s.body}>
          <div className={s.card}>
            {
              contactData.map((contact, index) => {
                return (
                  <div key={index} className={s.contact} onMouseOver={() => this.preloadTextbox(contact.copy)}>
                    <div className={s.iconDiv}>
                      {contact.icon(s.icon)}
                    </div>
                      <div className={s.copyDiv} onClick={this.copyToClipboard}>
                        <IconCopy className={s.copy}/>
                      </div>
                      <a href={contact.link} className={s.linkDiv}>
                        <IconLink className={s.link}/>
                      </a>
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