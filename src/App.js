import React from 'react';
import { ReactQueryDevtools } from 'react-query-devtools';
import { ReactQueryConfigProvider } from 'react-query';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ContactsList, ContactDetail } from './screens';
import reactQueryConfig from './reactQueryConfig.json';
import './App.css';

export default () => {
  return (
    <div className="app">
      <ReactQueryConfigProvider config={reactQueryConfig}>
      <Router>
        <Route render={({ location }) => (
          <AnimatePresence initial={false}>
            <Switch
              location={location}
              key={location.pathname}
            >
              <Route exact path="/" component={ContactsList} />
              <Route path="/contact/:id" component={ContactDetail} />
            </Switch>
          </AnimatePresence>
        )}
        />
      </Router>
      </ReactQueryConfigProvider>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}
