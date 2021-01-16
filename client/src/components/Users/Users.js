import React from 'react';
import './Users.css';

const Users = ({ users, room }) => {
  return (
    <div className='roomData'>
      <div className='profile'>
        <div className='avatar'>{room}</div>
      </div>
      <div className='title'>Active Users</div>
      {users ? (
        <div className='users'>
          {users.map((user) => (
            <div key={user.id} className='user'>
              <p className='name'>{user.name}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Users;
