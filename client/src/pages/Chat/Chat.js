import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';

import Input from '../../components/Input/Input';
import Messages from '../../components/Messages/Messages';
import Users from '../../components/Users/Users';
import InfoBar from '../../components/InfoBar/InfoBar';

import './Chat.css';

const ENDPOINT = '/';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  let history = useHistory();

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
        history.push('/');
      }
    });
  }, [location.search, history]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });

    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  });

  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <div className='outerContainer'>
      <div className='container'>
        <Users users={users} room={room} />
        <div className='chatbox'>
          <InfoBar name={name} />
          <Messages messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
