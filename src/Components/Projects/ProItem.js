import React, { Component } from 'react';

import Modal from '../Modal/Modal';

import { IconPhotos, IconLink } from '../../Icons';

import s from './proItem.module.css';

class ProItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      target: 0,
      class: s.card,
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleProItemScroll);
  }

  isInViewport = (offset = 0) => {
    if (!this.proItem) return false;
    const top = this.proItem.getBoundingClientRect().top;
    return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
  }

  handleProItemScroll = (event) => {
    if (this.isInViewport()) {
      this.setState({
        class: `${s.card} ${s.scroll}`
      })
      window.removeEventListener('scroll', this.handleProItemScroll)
    } 
  }

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    })
  }

  leftArrow = (length) => {
    let newTarget = ( this.state.target - 1 ) % length;
    this.setState({
      target: newTarget,
    })
  }

  rightArrow = (length) => {
    let newTarget = ( this.state.target + 1 ) % length;
    this.setState({
      target: newTarget,
    })
  }

  render() {
    const {project} = this.props;
    const {name, link, about, techstack, image} = project;
    const {length} = image;
    return (
      <div className={this.state.class} ref={(el) => this.proItem = el}>
        { 
          this.state.modalOpen && 
          <Modal 
            left={() => this.leftArrow(length)}
            right={() => this.rightArrow(length)}
            toggle={this.toggleModal} 
            image={image[this.state.target]}
            /> 
        }
        <div className={s.image} style={{backgroundImage: `url(${image[0]})`}}>
          <div className={s.links}>
            <a href={link} className={s.a}>
              <IconLink className={s.link}/>
            </a>
            <div className={s.a} onClick={this.toggleModal}>
              <IconPhotos className={s.link}/>
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