import React from 'react';
import './ContactListItem.css';

export default ({ contact }) => (
  <div className="contact-list-item">
    <span>{contact.name}</span>
    <span>{contact.city}</span>
  </div>
);
