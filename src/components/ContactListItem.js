import React from 'react';
import { Link } from 'react-router-dom';
import './ContactListItem.css';

export default ({ contact }) => (
  <div className="contact-list-item">
    <Link to={`/contact/${contact.id}`}>
      <span>{contact.name}</span>
      <span>{contact.city}</span>
    </Link>
  </div>
);
