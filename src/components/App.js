import React from 'react';
import store from '../store/store.js';
import reducer from '../reducers/reducer.js';
import action from '../actions/action.js';
import './App.css';

const storeData = store(reducer);
console.log('state: ',storeData.getState());
function App() {
  const increment = () => {
    storeData.dispatch(action.incrementAction);
  };

  const decrement = () => {
    storeData.dispatch(action.decrementAction);
    console.log("dec");
  };
  
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
