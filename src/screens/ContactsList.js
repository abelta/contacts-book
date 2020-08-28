import React, { useRef } from 'react';
import { useInfiniteQuery } from 'react-query';
import InfiniteScroll from 'react-infinite-scroll-component';
import { motion } from 'framer-motion';
import { listContacts } from '../api';
import { ContactListItem } from '../components';
import {
  useCount,
  setCount as saveScrollY,
} from '../contexts/CountContext';
import './ContactsList.css';

const ContactsList = () => {
  const [savedScrollY, dispatch] = useCount();
  const scroll = useRef(null);
  const {
    data,
    fetchMore,
    canFetchMore,
  } = useInfiniteQuery(
    'contacts',
    async (_, page) =>  await listContacts({ page }),
    { getFetchMore: data => data.page + 1 },
  );

  console.log('SAVED SCROLL Y', savedScrollY);

  return (
    <motion.div
      className="contacts-list"
      initial={{ x: '-300px' }}
      animate={{ x: '0' }}
      exit={{ x: '-300px' }}
      transition={{ ease: "easeOut", duration: 0.2 }}
    >
      <h2 className="contacts-list__title">CONTACT LIST</h2>
      <InfiniteScroll
        ref={scroll}
        dataLength={data ? data.length * 20 : 0}
        next={() => fetchMore()}
        hasMore={canFetchMore}
        onScroll={() => dispatch(saveScrollY(scroll.current.lastScrollTop))}
        initialScrollY={savedScrollY}
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
    </motion.div>
  );
};

export default ContactsList;
