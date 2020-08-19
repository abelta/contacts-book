import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ContactListItem } from '../components';
import { contacts } from '../mocks/contact';
import './ContactsList.css';

const ContactsList = () => {
  console.log('CONTACTS', contacts({ page: 0 }).contacts)
  return (
    <div className="contacts-list">
      <h2  className="contacts-list__title">CONTACT LIST</h2>
      <InfiniteScroll
        dataLength={20}
        next={() => console.log('NEXT')}
        hasMore
        loader={<p>LOADING</p>}
        endMessage={<p>END</p>}
      >
      {
        contacts({ page: 0 })
          .contacts
          .map(contact => (
            <ContactListItem
              key={contact.id}
              contact={contact}
            />
          ))
      }
      </InfiniteScroll>
    </div>
  );
};

export default ContactsList;
