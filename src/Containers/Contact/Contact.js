import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
  return (
    <div className='contact'>
      <h3>Contact Info</h3>
      <div className='contact-items'>
        <div className='email'>
          <span className='boldTxt'>Email:</span> alouzao10@email.com
        </div>
        <div className='phone'>
          <span className='boldTxt'>Phone:</span> (732)-555-5555
        </div>
      </div>
    </div>
  );
}

export default Contact;
