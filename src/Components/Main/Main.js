import React, { Component } from 'react';

import Landing from '../Landing/Landing';
import SideNav from '../SideNav/SideNav';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Footer from '../Footer/Footer';

import s from './main.module.css';

const colorTheme = [
  'theme1',
  'theme2',
  'theme3',
  'theme4',
  'theme5',
  'theme6',
  'theme7'
];

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      theme: null,
    };
  }

  componentDidMount = () => {
    this.setState({
      theme: Math.floor(Math.random() * colorTheme.length),
    })
  }

  changeColors = () => {
    this.setState({
      theme: ((this.state.theme + 1) % colorTheme.length)
    })
  }

  render() {
    return (
      <div className={`${s.app} ${colorTheme[this.state.theme]}`}>
        <div className={s.header}>
          <Landing />
        </div>
        <div className={s.sidenav}>
          <SideNav changeColors={this.changeColors}/>
        </div>
        <div className={s.main}>
          <About/>
          <Projects/>
          <Experience/>
          <Contact/>
        </div>
        <div className={s.footer}>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default Home;