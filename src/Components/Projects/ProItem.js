import React, { Component } from 'react';

import Modal from '../Modal/Modal';

import linkIcon from '../../Assets/link.png';
import galleryIcon from '../../Assets/gallery.png';

import s from './proItem.module.css';

class ProItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };
  }

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    })
  }

  render() {
    const {project} = this.props;
    const {name, link, about, techstack, image} = project;
    return (
      <div className={s.card}>
        { this.state.modalOpen && <Modal toggle={this.toggleModal} image={image}/> }
        <div className={s.image} style={{backgroundImage: `url(${image})`}}>
          <div className={s.links}>
            <a href={link} className={s.a}>
              <img src={linkIcon} alt={link} className={s.link}/>
            </a>
            <div className={s.a} onClick={this.toggleModal}>
              <img src={galleryIcon} alt={'photos'} className={s.link}/>
            </div>
          </div>
          <div className={s.filter}>
            <div className={s.header}>
              <div className={s.name}>
                {name}
              </div>
              <div className={s.tech}>
                {
                  techstack.map((tech, index) => {
                    return <div className={s.techstack} key={index}>{tech}</div>
                  })
                }
              </div>
            </div>
            {
              about.map((info, index) => {
                return <div className={s.about} key={index}>{info}</div>
              })
            }
          </div>
        </div>
      </div>
    );
  }
};

export default ProItem;

// <img src={image} alt={name} className={s.image}/>