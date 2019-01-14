import React, { Component } from 'react';

import email from '../../Assets/email.png';

import s from './contact.module.css';

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
        <div className={s.title}>
          contact
        </div>
        <form>
          <textarea
            readOnly
            className={s.textarea}
            ref={(textarea) => this.textArea = textarea}
            value='johnmvaught@gmail.com'
           />
         </form>
        <div className={s.body} onClick={this.copyToClipboard}>
          {/* <div>
             {this.state.copySuccess}
           </div> */}
          <div className={s.imgbox}>
            <img className={s.img} src={email} alt={"email me!"}/>
            <span className={s.email}>johnmvaught@gmail.com</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;