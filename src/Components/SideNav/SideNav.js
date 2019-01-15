import React, { Component } from 'react';

import s from './sidenav.module.css';
import hamburger from '../../Assets/hamburger.png';
import resume from '../../Assets/jack-vaught-resume.pdf';

class SideNav extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      hover: null,
      sideNav: false,
      drawerOpen: false,
    };

    this.navNarrow = React.createRef();
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

  componentDidMount = () => {
    this.updateSideNav();
    window.addEventListener("resize", this.updateSideNav);
  }

  updateSideNav = () => {
    let shouldOpenSideNav = window.innerWidth >= 800
    if (this.state.sideNav !== shouldOpenSideNav) {
      this.setState({
        sideNav: shouldOpenSideNav,
        drawerOpen: false,
      })
    }
  }

  burgerToggle = () => {
    if (!this.state.sideNav) {
      this.setState({
        drawerOpen: !this.state.drawerOpen,
      })
    }
  }
  
  render() {
    return (
      <nav className={this.state.drawerOpen ? s.drawer : s.container}>
            <div className={!this.state.sideNav ? s.drawerTitle : s.title}>jackvaught</div>
            <div className={s.navContainer}>
          {
            !this.state.sideNav && 
            <img src={hamburger} alt={"Links!"} className={s.hamburger} onClick={this.burgerToggle}/>
          }
          {
            (this.state.drawerOpen || this.state.sideNav) &&
            <div className={s.narrowLinks}>
              <a
                href={"#about"}
                onClick={this.burgerToggle}
                onMouseOver={() => this.handleMouseEnter('about')} 
                onMouseLeave={() => this.handleMouseLeave('about')} 
                style={this.shouldChangeColor('about')}
                className={s.link}>
                about
              </a>
              <a 
                href={"#projects"}
                onClick={this.burgerToggle}
                onMouseOver={() => this.handleMouseEnter('projects')} 
                onMouseLeave={() => this.handleMouseLeave('projects')} 
                style={this.shouldChangeColor('projects')}
                className={s.link}>
                projects
              </a>
              <a 
                href={"#experience"}
                onClick={this.burgerToggle}
                onMouseOver={() => this.handleMouseEnter('experience')} 
                onMouseLeave={() => this.handleMouseLeave('experience')} 
                style={this.shouldChangeColor('experience')}
                className={s.link}>
                experience
              </a>
              <a 
                href={"#contact"}
                onClick={this.burgerToggle}
                onMouseOver={() => this.handleMouseEnter('contact')} 
                onMouseLeave={() => this.handleMouseLeave('contact')}
                style={this.shouldChangeColor('contact')}
                className={s.link}>
                contact
              </a>
              <a 
                onClick={this.burgerToggle}
                onMouseOver={() => this.handleMouseEnter('resume')} 
                onMouseLeave={() => this.handleMouseLeave('resume')}
                style={this.shouldChangeColor('resume')}
                className={s.resume} 
                href={resume}>
                resume
              </a>
            </div>
          }
        </div>
      </nav>
    );
  }
}

export default SideNav;