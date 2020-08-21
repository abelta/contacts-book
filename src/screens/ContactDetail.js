import React from 'react';
import { useQuery } from 'react-query';
import { Link, useRouteMatch } from 'react-router-dom';
import { getContact } from '../api';
import { ContactCard } from '../components';

export default () => {
  const { params: { id } } = useRouteMatch();
  const { data: contact } = useQuery('contact', async() => await getContact({ id }));

  return (
    <div className="contact-detail">
      <Link to="/">Back</Link>
      <h1>CONTACT DETAIL</h1>
      {
        contact &&
        <ContactCard contact={contact} />
      }
    </div>
  );
};
