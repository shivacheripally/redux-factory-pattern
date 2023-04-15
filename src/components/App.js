import React, { useState } from 'react';
import store from '../store/store.js';
import reducer from '../reducers/reducer.js';
import action from '../actions/action.js';
import './App.css';

const storeData = store(reducer);

function App() {
  const inc = action.incrementAction;
  const dec = action.decrementAction;

  const [count, setCount] = useState(storeData.getState());

  const increment = () => {
    storeData.dispatch(inc);
    setCount(storeData.getState());
  };

  const decrement = () => {
    storeData.dispatch(dec);
    setCount(storeData.getState());
  };
  
  return (
    <div>
      <h1>{count}</h1>
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
