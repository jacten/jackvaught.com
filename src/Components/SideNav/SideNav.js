import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import s from './sidenav.module.css';
import resume from '../../Assets/jack-vaught-resume.pdf';

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hover: null,
    };
  }

  handleMouseEnter = (link) => {
    this.setState({hover: link})
  };

  handleMouseLeave = () => {
    this.setState({hover: null})
  };

  shouldChangeColor = (link) => {
    return this.state.hover && this.state.hover !== link
      ? {color: 'var(--darker-primary)', transition: '.3s', borderColor: 'var(--darker-primary)'}
      : {transition: '.3s'};
  }
  
  render() {
    return (
      <div className={s.container}>
        <div className={s.title}>jackvaught</div>
        <div className={s.navContainer}>
          <Link 
            onMouseOver={() => this.handleMouseEnter('about')} 
            onMouseLeave={() => this.handleMouseLeave('about')} 
            style={this.shouldChangeColor('about')}
            className={s.link} 
            to="/main/about">
            about
          </Link>
          <Link 
            onMouseOver={() => this.handleMouseEnter('projects')} 
            onMouseLeave={() => this.handleMouseLeave('projects')} 
            style={this.shouldChangeColor('projects')}
            className={s.link} 
            to="/main/projects">
            projects
          </Link>
          <Link 
            onMouseOver={() => this.handleMouseEnter('experience')} 
            onMouseLeave={() => this.handleMouseLeave('experience')} 
            style={this.shouldChangeColor('experience')}
            className={s.link} 
            to="/main/experience">
            experience
          </Link>
          <Link 
            onMouseOver={() => this.handleMouseEnter('contact')} 
            onMouseLeave={() => this.handleMouseLeave('contact')}
            style={this.shouldChangeColor('contact')}
            className={s.link} 
            to="/main/contact">
            contact
          </Link>
          <a 
            onMouseOver={() => this.handleMouseEnter('resume')} 
            onMouseLeave={() => this.handleMouseLeave('resume')}
            style={this.shouldChangeColor('resume')}
            className={s.resume} 
            href={resume}>
            resume
          </a>
        </div>
      </div>
    );
  }
}

export default SideNav;