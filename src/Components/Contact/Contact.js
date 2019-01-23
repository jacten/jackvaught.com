import React, { Component } from 'react';

import Title from '../Title/Title.js';
import contactData from '../../Data/contactData';
import s from './contact.module.css';

import {
  IconCopy, 
  IconLink,
} from '../../Icons';

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
      <div className={s.container} id={'contact'}>
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
          <div className={s.status}>
            Hit Me Up!
          </div>
          <div className={s.card}>
            {
              contactData.map((contact, index) => {
                return (
                  <div key={index} className={s.contact} onMouseOver={() => this.preloadTextbox(contact.copy)}>
                    <div className={s.iconDiv}>
                      {contact.icon(s.icon)}
                    </div>
                      <a href={contact.link} className={s.linkDiv}>
                        <IconLink className={s.link}/>
                      </a>
                      <div className={s.copyDiv} onClick={this.copyToClipboard}>
                        <IconCopy className={s.copy}/>
                      </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;