import React from 'react';
import { ReactQueryDevtools } from 'react-query-devtools';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { ContactsList, ContactDetail } from './screens';

function App() {
  return (
    <>
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
      <ReactQueryDevtools initialIsOpen />
    </>
  );
}

export default App;
