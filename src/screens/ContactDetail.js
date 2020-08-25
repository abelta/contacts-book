import React from 'react';
import { useQuery, useQueryCache } from 'react-query';
import { Link, useRouteMatch } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getContact } from '../api';
import { ContactCard } from '../components';
import './ContactDetail.css';

export default () => {
  const { params: { id } } = useRouteMatch();
  const queryCache = useQueryCache();
  const { data: contact } = useQuery(
    ['contact', id],
    async () => await getContact({ id }),
    {
      initialData: () => queryCache
        .getQueryData('contacts')
        ?.map(page => page.contacts)
        .flat()
        .find(contact => contact.id === Number(id))
      ,
    },
  );

  return (
    <motion.div
      className="contact-detail"
      initial={{ x: '300px' }}
      animate={{ x: '0' }}
      exit={{ x: '300px' }}
      transition={{ ease: "easeOut", duration: 0.2 }}
    >
      <Link to="/">Back</Link>
      <h1>CONTACT DETAIL</h1>
      {
        contact &&
        <ContactCard contact={contact} />
      }
    </motion.div>
  );
};
