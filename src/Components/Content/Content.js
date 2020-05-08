import React from 'react';
import './style.css';

import Card from './Card/Card';

function Content() {
  return (
    <div className='content'>
      <Card>
        <h3>Title</h3>
        <p>Content</p>
      </Card>

      <Card>
        <h3>Title 2</h3>
        <p>Content 2</p>
      </Card>
    </div>
  );
}

export default Content;
