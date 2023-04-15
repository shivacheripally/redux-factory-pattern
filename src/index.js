import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import reducer from './reducers/reducer.js';
import App from './components/App';

// console.log(reducer);

function createStore(reducer){
  let state = 0;
  const getState = () => (state);

  const dispatch = (action) => {
    state = reducer(state,action);
  }

  return {
    getState,
    dispatch
  }
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
