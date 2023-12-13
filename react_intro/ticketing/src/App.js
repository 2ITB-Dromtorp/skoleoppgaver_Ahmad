import React, { useState } from 'react';
import './index.css'; 

const TicketingSystem = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTicketSubmitted(true);
  };

  const handleViewTicket = () => {
    alert(`Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}`);
  };

  const handleProgress = () => {
    alert('Currently being resolved');
  };

  const handleDeleteTicket = () => {
    setTicketSubmitted(false);
    setName('');
    setEmail('');
    setPhoneNumber('');
    alert('Ticket deleted');
  };

  return (
    <div className="container">
      <h2>Send in Ticket</h2>
      {!ticketSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter phone number"
              required
            />
          </div>
          <button type="submit">Submit Ticket</button>
        </form>
      ) : (
        <div>
          <p>Ticket Submitted</p>
          <button onClick={handleViewTicket}>View Ticket</button>
          <button onClick={handleProgress}>Progress</button>
          <button onClick={handleDeleteTicket}>Delete Ticket</button>
        </div>
      )}
    </div>
  );
};

export default TicketingSystem;
