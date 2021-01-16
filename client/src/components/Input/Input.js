import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className='form'>
    <input
      className='input'
      type='text'
      placeholder='Type a message...'
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
    />
    <button onClick={(e) => sendMessage(e)} className='sendMessage'>
      <i className='fas fa-paper-plane' style={{ fontSize: '20px' }}></i>
    </button>
  </form>
);

export default Input;
