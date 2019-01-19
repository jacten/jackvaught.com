import React, { Component } from 'react';

import Title from '../Title/Title';
import Job from './Job';
import s from './experience.module.css';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      active: 0,
    };
  }

  handleJobClick = (jobIndex) => {
    if (jobIndex !== this.state.active) {
      this.setState({
        active: jobIndex,
      })
    }
  }

  render() {
    return (
      <div className={s.container} id={"experience"}>
        <Title page={'experience'}/>
        <div className={s.card}>
          <div className={s.sideNav}>
          {
            jobData.map((job, index) => {
              return (
                <div className={s.buttonBox} key={index}>
                  <div 
                    className={s.button} 
                    onClick={() => this.handleJobClick(index)} 
                    key={index}>{job.shortened}
                  </div>
                </div>
              )
            })
          }
          </div>
          <Job item={jobData[this.state.active]}/>
        </div>
      </div>
    );
  }
}

export default Experience;

const jobData = [
  {
    company: 'Super Deluxe',
    shortened: 'SD',
    title: 'Lead Software Engineer',
    dates: '2018',
    location: 'Los Angeles, CA',
    bullets: [
      'Super Deluxe (RIP) was an entertainment company that was mostly famous for their youtube videos.',
      'Most of my time was spent building out new features on the live-kit api that they used to add interactivity to livestreams on facebook. For example, the live team had a "Build a Candidate" show and wanted me to create a closed caption overlay for the stream. I built it out in a few days using CSS transitions.',
      'I was also responsible for all the tech needs of the other departments. This meant I helped launch a few mobile games, deployed microsites, and added pages to the main SD website.',
      'We were in the process of planning out what the next version of that SD website would be when the company was shut down. Oh well!',
    ],
    link: 'https://en.wikipedia.org/wiki/Super_Deluxe',
  },
  {
    company: 'Edmunds.com, Inc',
    shortened: 'Edmunds',
    title: 'Vehicle Data Editor',
    dates: '2012 - 2017',
    location: 'Santa Monica, CA',
    bullets: [
      `Edmunds.com is an automotive website. They originally started out as a car information pamphlet and now their main focus is on trying to get people to buy cars online.`,
      `Much of the work I did was pretty repetitive. We used a tool to enter in information about all the new car models as they were released. Then we used the tool create sets of rules for what different options were available with which styles and which colors. The rule creation portion was used in order to be able to custom build these cars on the Edmunds website.`,
      `The most interesting thing I did there was a project where I had to review a new feature that our tech team built to attempt to automatize part of our job. That system would parse PDFs and attempt to extract the data from it. It then gave a score of to what degree it was confident in it's findings. I had to test it out, explain why it didn't actually work, both in concept and in execution, and write a report detailing that.`,
      `My experience working on that report is at least a part of what made me interested in software development. I found testing out that tool to be 100 times more interesting than my normal work.`
    ],
    link: 'https://www.edmunds.com/',
  },
  {
    company: 'Northwestern University',
    shortened: 'NU',
    title: 'IT Assistant - School of Education and Social Policy',
    dates: '2012',
    location: 'Evanston, IL',
    bullets: [
      'I got this job straight out of college. I majored in History so IT was a natural next path.',
      'The job consisted of relatively simple IT tasks. I have always been good at computers (or rather, good at googling how to do things) so I found the work to be pretty easy.',
      'My googling skills continue to be useful in coding.',
      `I left this job to move to LA to try to do screenwriting. That didn't work out so well. My father wants to do screenwriting as well and he works as an IT director so I guess being delusional runs in the family.`
    ],
    link: 'https://www.sesp.northwestern.edu/',
  },
];