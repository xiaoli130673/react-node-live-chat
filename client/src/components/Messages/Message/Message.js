import React from 'react';

import './Message.css';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className='messageContainer justifyEnd'>
      <div className='messageUser pr-10'>{trimmedName}</div>
      <div className='message outgoing'>{text}</div>
    </div>
  ) : (
    <div className='messageContainer justifyStart'>
      <div className='message incoming'>{text}</div>
      <div className='messageUser pl-10 '>{user}</div>
    </div>
  );
};

export default Message;
