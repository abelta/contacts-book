import React from 'react';

export default ({ contact }) => (
  <div className="contact-card">
    <p><img alt={contact.name} src={contact.avatar} /></p>
    <p>{contact.name}</p>
    <p>{contact.city}, {contact.country.code}</p>
    <p>{contact.phone}</p>
    <p>{contact.email}</p>
  </div>
);
