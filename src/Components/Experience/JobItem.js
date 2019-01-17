import React, { Component } from 'react';

import s from './jobItem.module.css';

class JobItem extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      expanded: false,
    };
  }

  handledJobClick = () => {
    this.setState({
      expanded: !this.state.expanded,
    })
  }

  render () {
  const { job } = this.props;
  const {company, title, dates, location} = job;

    return (
      <div 
        className={this.state.expanded ? `${s.container} ${s.expanded}` : s.container}
        onClick={this.handledJobClick}>
        <div className={s.card}>
          {company}
        </div>
      </div>
    );
  }
}

export default JobItem;