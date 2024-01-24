import React, { useState } from 'react';
import './index.css'; 

const TicketingSystem = () => {    // Notater for megselv til forklarelse, Komponent, to array
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [complaint, setComplaint] = useState('');
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTicketSubmitted(true);   //indikerer en ticket har blitt sent
  };

  const handleViewTicket = () => {
    if (ticketSubmitted) {
      const ticketDetails = `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nComplaint: ${complaint}`;
      alert(ticketDetails);
    } //sjekker om en ticket har blitt sendt og vis ja, melding 
  };

  const handleProgress = () => {
    alert('This ticket is currently being resolved by our team. Thank you for your patience.');
  };

  const handleDeleteTicket = () => {
    setTicketSubmitted(false);
    setName('');
    setEmail('');
    setPhoneNumber('');
    setComplaint('');
    alert('Ticket deleted');   //reseter til false,
  };
 //riktig info,
  return (
    <div className="container">   
      <h2>Send in Ticket</h2>
        {/* hvis ticket ikke er sendt inn, hvis form. Hvis ticket er sendt inn, hvis progresjon */}
      {!ticketSubmitted ? (
        <form onSubmit={handleSubmit}>  
          <div className="form-box">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter phone number"
              required
            />
            <label htmlFor="complaint">Complaint:</label>
            <textarea
              id="complaint"
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
              required
            ></textarea>
            <button type="submit">Submit Ticket</button>
            <p> Kontakt oss på Hansenfrukt@gmail.com</p>
          </div>
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
