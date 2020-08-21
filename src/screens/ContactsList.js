import React, { useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import { listContacts } from '../api';
import { ContactListItem } from '../components';
import './ContactsList.css';

const ContactsList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const {
    data,
    fetchMore,
  } = useInfiniteQuery(
    'contacts',
    async (_, page) =>  await listContacts({ page }),
    { getFetchMore: data => data.page + 1 },
  );

  return (
    <div className="contacts-list">
      <h2 className="contacts-list__title">CONTACT LIST</h2>
      <h3 className="contacts-list__page-count">{currentPage}</h3>
      <InfiniteScroll
        dataLength={data ? data.length * 20 : 0}
        next={() => {
          setCurrentPage(currentPage + 1);
          fetchMore();
        }}
        hasMore={true}
        loader={<p>LOADING</p>}
        endMessage={<p>END</p>}
      >
      {
        data && data.map((page, i) => (
          page.contacts.map(contact => (
            <ContactListItem
              key={contact.id}
              contact={contact}
            />
          ))
        ))
      }
      </InfiniteScroll>
    </div>
  );
};

export default ContactsList;
