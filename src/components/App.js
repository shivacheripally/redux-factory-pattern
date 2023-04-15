import React from 'react';
import store from '../store/store.js';
import reducer from '../reducers/reducer.js';
import action from '../actions/action.js';
import './App.css';

const storeData = store(reducer);

const inc = action.incrementAction;
const dec = action.decrementAction;

const increment = () => {
  storeData.dispatch(inc);
}

const decrement = () => {
  storeData.dispatch(dec);
}

function App() {
  return (
    <div>
      <h1>{storeData.getState()}</h1>
      <div className="btns">
        <h1>
          <button onClick={increment}>+</button>
        </h1>
        <h1>
          <button onClick={decrement}>-</button>
        </h1>
      </div>
    </div>
  );
}

export default App;
