import React, { Component } from 'react';

import s from './sidenav.module.css';
import { IconHamburger } from '../../Icons';
import resume from '../../Assets/JackVaughtResume.pdf';

class SideNav extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      hover: null,
      sideNav: false,
      drawerOpen: false,
      showLinks: false,
      class: `${s.a} ${s.link}`,
    };
  }

  handleScroll = (event) => {
    this.setState({class: `${s.a} ${s.link} ${s.scroll}`})
    window.removeEventListener('scroll', this.handleScroll)
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
    window.addEventListener('scroll', this.handleScroll);
    this.updateSideNav();
    window.addEventListener('resize', this.updateSideNav);
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
      if (!!this.state.hover) {
        this.setState({
          hover: null,
        })
      }
      setTimeout(() => {
        this.setState({
          showLinks: this.state.drawerOpen,
        })
      },500)
    }
  }
  
  render() {
    return (
      <nav onClick={this.burgerToggle} className={this.state.drawerOpen ? s.drawer : s.container}>
            <div onClick={this.props.changeColors} className={!this.state.sideNav ? s.drawerTitle : s.title}>jackvaught</div>
            <div className={s.navContainer}>
          {
            !this.state.sideNav && 
              <IconHamburger className={s.hamburger}/>

          }
          {
            ((this.state.drawerOpen && this.state.showLinks) || this.state.sideNav) &&
            <div className={s.links}>
              <a
                href={"#about"}
                onClick={this.burgerToggle}
                onMouseOver={() => this.handleMouseEnter('about')} 
                onMouseLeave={() => this.handleMouseLeave('about')} 
                style={{...this.shouldChangeColor('about'), animationDelay: '0.4s'}}
                className={this.state.class}>
                about
              </a>
              <a 
                href={"#projects"}
                onClick={this.burgerToggle}
                onMouseOver={() => this.handleMouseEnter('projects')} 
                onMouseLeave={() => this.handleMouseLeave('projects')} 
                style={{...this.shouldChangeColor('projects'), animationDelay: '0.5s'}}
                className={this.state.class}>
                projects
              </a>
              <a 
                href={"#experience"}
                onClick={this.burgerToggle}
                onMouseOver={() => this.handleMouseEnter('experience')} 
                onMouseLeave={() => this.handleMouseLeave('experience')} 
                style={{...this.shouldChangeColor('experience'), animationDelay: '0.6s'}}
                className={this.state.class}>
                experience
              </a>
              <a 
                href={"#contact"}
                onClick={this.burgerToggle}
                onMouseOver={() => this.handleMouseEnter('contact')} 
                onMouseLeave={() => this.handleMouseLeave('contact')}
                style={{...this.shouldChangeColor('contact'), animationDelay: '0.7s'}}
                className={this.state.class}>
                contact
              </a>
              <a 
                onClick={this.burgerToggle}
                onMouseOver={() => this.handleMouseEnter('resume')} 
                onMouseLeave={() => this.handleMouseLeave('resume')}
                style={{...this.shouldChangeColor('resume'), animationDelay: '0.8s'}}
                className={`${this.state.class} ${s.resume}`} 
                href={resume}>
                résumé
              </a>
            </div>
          }
        </div>
      </nav>
    );
  }
}

export default SideNav;