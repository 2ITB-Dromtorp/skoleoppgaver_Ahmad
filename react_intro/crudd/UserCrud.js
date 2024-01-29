// UserCrud.js
import React, { useState } from 'react';
import './UserCrud.css';

const UserCrud = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  const addUser = () => {
    setUsers([...users, newUser]);
    setNewUser({ name: '', email: '' });
  };

  return (
    <div className="crud-container">
      <h2>User CRUD</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
      </div>
      <button onClick={addUser}>Add User</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserCrud;
