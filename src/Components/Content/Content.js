import React from 'react';
import './style.css';

import Card from './Card/Card';

// ? build an array with some content to allow dynamic build of section???

function Content() {
  return (
    <div className='content'>
      <Card>
        <div className='content-header'>
          <h2>Why I Built This</h2>
          <p className='date'>5/1/2020</p>
        </div>
        <div className='content-body'>
          <p>Some Text...</p>
        </div>
      </Card>

      <Card>
        <div className='content-header'>
          <h2>What Else To Do</h2>
          <p className='date'>5/12/2020</p>
        </div>
        <div className='content-body'>
          <p>Some Text...</p>
        </div>
      </Card>
    </div>
  );
}

export default Content;
