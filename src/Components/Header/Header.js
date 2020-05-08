import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import Navbar from '../Navbar/Navbar';

function Header() {
  return (
    <div>
      <header className='header'>
        <nav className='menu'>
          <Link to='/'>Home</Link>
          <Link to='/About'>About</Link>
          <Link to='/Contact'>Contact</Link>
        </nav>
      </header>
      <div className='logo'>
        <h1>Alexander Louzao</h1>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
