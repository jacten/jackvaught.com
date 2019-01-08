import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import s from './sidenav.module.css';

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
      ? {color: 'rgba(0, 0, 0, 0.267)', transition: '.5s'}
      : {transition: '.5s'};
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
            className={s.link} to="/main/about">
            about
          </Link>
          <Link 
            onMouseOver={() => this.handleMouseEnter('projects')} 
            onMouseLeave={() => this.handleMouseLeave('projects')} 
            style={this.shouldChangeColor('projects')}
            className={s.link} to="/main/projects">
            projects
          </Link>
          <Link 
            onMouseOver={() => this.handleMouseEnter('experience')} 
            onMouseLeave={() => this.handleMouseLeave('experience')} 
            style={this.shouldChangeColor('experience')}
            className={s.link} to="/main/experience">
            experience
          </Link>
          <Link 
            onMouseOver={() => this.handleMouseEnter('contact')} 
            onMouseLeave={() => this.handleMouseLeave('contact')}
            style={this.shouldChangeColor('contact')}
            className={s.link} to="/main/contact">
            contact
          </Link>
        </div>
      </div>
    );
  }
}

export default SideNav;