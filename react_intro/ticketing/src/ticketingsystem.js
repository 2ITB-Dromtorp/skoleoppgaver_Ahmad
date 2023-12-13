import React, { useState } from 'react';

const TicketingSystem = () => {
  const [problem, setProblem] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission, like sending the ticket data to a server or displaying it
    console.log('Ticket submitted:', { problem, phoneNumber });
    // You can clear the form after submission
    setProblem('');
    setPhoneNumber('');
  };

  return (
    <div>
      <h2>Submit a Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="problem">Describe the problem:</label>
          <textarea
            id="problem"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            pattern="[0-9]{9}"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter 9-digit phone number"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TicketingSystem;