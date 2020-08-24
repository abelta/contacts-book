import React from 'react';
import { ReactQueryDevtools } from 'react-query-devtools';
import { ReactQueryConfigProvider } from 'react-query';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ContactsList, ContactDetail } from './screens';
import reactQueryConfig from './reactQueryConfig.json';
import './App.css';

function App() {
  return (
    <>
      <ReactQueryConfigProvider config={reactQueryConfig}>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/contact/:id">
              <ContactDetail />
            </Route>
            <Route path="/">
              <ContactsList />
            </Route>
          </Switch>
        </div>
      </Router>
      </ ReactQueryConfigProvider>
      <ReactQueryDevtools initialIsOpen />
    </>
  );
}

export default App;
