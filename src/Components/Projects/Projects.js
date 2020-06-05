import React, { Component, Fragment } from 'react';
import { v1 as uuid } from 'uuid';
import './style.css';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          name: 'FIMAN',
          description:
            'Some info about FIMAN...Some info about FIMAN...Some info about FIMAN...Some info about FIMAN...Some info about FIMAN...Some info about FIMAN...Some info about FIMAN...Some info about FIMAN...Some info about FIMAN...Some info about FIMAN...Some info about FIMAN...Some info about FIMAN...Some info about FIMAN...Some info about FIMAN...',
          id: uuid(),
        },
        {
          name: 'SERA',
          description:
            'Some info about SERA...Some info about SERA...Some info about SERA...Some info about SERA...Some info about SERA...Some info about SERA...Some info about SERA...Some info about SERA...Some info about SERA...Some info about SERA...Some info about SERA...Some info about SERA...Some info about SERA...Some info about SERA...Some info about SERA...',
          id: uuid(),
        },
        {
          name: 'SRMP',
          description:
            'Some info about SRMP...Some info about SRMP...Some info about SRMP...Some info about SRMP...Some info about SRMP...Some info about SRMP...Some info about SRMP...Some info about SRMP...Some info about SRMP...Some info about SRMP...Some info about SRMP...Some info about SRMP...Some info about SRMP...Some info about SRMP...Some info about SRMP...',
          id: uuid(),
        },
        {
          name: 'HERMP',
          description:
            'Some info about HERMP...Some info about HERMP...Some info about HERMP...Some info about HERMP...Some info about HERMP...Some info about HERMP...Some info about HERMP...Some info about HERMP...Some info about HERMP...Some info about HERMP...Some info about HERMP...Some info about HERMP...Some info about HERMP...',
          id: uuid(),
        },
        {
          name: 'CFRMP',
          description:
            'Some info about CFRMP...Some info about CFRMP...Some info about CFRMP...Some info about CFRMP...Some info about CFRMP...Some info about CFRMP...Some info about CFRMP...Some info about CFRMP...Some info about CFRMP...',
          id: uuid(),
        },
      ],
    };
  }

  render() {
    return (
      <div className='projects'>
        <h3 className='header'>Current Project Work</h3>
        {this.state.projects.map((project) => (
          <Fragment>
            <h4 className='projectTitle'>{project.name}</h4>
            <p className='projectDescription'>{project.description}</p>
          </Fragment>
        ))}
      </div>
    );
  }
}

export default Projects;
