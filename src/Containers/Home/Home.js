import React from 'react';
import './style.css';
import logo from '../../logo.svg';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <img src={logo} className='image' />
    </div>
  );
}

export default Home;
