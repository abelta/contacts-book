import React, { createContext, useContext, useReducer } from 'react';

const initState = 0;

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'set': return payload.count;
    default: throw Error();
  }
}

export const setCount = count => ({
  type: 'set',
  payload: { count },
});

export const CountContext = createContext();

export const CountProvider = ({ children }) => {
  const value = useReducer(reducer, initState);
  console.log('INITIATING COUNT PROVIDER', value[0]);
  return (
    <CountContext.Provider value={value}>
      {children}
    </CountContext.Provider>
  );
}

export const useCount = () => {
  const count = useContext(CountContext);
  return count;
}
