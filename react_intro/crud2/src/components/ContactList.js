// src/components/ContactList.js
import React, { useState } from 'react';

const ContactList = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  ]);

  const [newContact, setNewContact] = useState({ name: '', email: '' });
  const [editing, setEditing] = useState(false);
  const [editContact, setEditContact] = useState({ id: null, name: '', email: '' });

  const handleInputChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const addContact = () => {
    setContacts([...contacts, { id: contacts.length + 1, ...newContact }]);
    setNewContact({ name: '', email: '' });
  };

  const editButtonHandler = (contact) => {
    setEditing(true);
    setEditContact(contact);
  };

  const updateContact = () => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === editContact.id ? editContact : contact
    );
    setContacts(updatedContacts);
    setEditing(false);
    setEditContact({ id: null, name: '', email: '' });
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div className="contact-list">
      <h2>{editing ? 'Edit Contact' : 'Add Contact'}</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={editing ? editContact.name : newContact.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={editing ? editContact.email : newContact.email}
        onChange={handleInputChange}
      />
      {editing ? (
        <button onClick={updateContact}>Update Contact</button>
      ) : (
        <button onClick={addContact}>Add Contact</button>
      )}

      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.email}
            <button onClick={() => editButtonHandler(contact)}>Edit</button>
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
