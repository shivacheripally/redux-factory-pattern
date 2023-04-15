import React from 'react';
import store from '../store/store.js';
import reducer from '../reducers/reducer.js';
import './App.css';

const storeData = store(reducer);

console.log(storeData.getState());

function App() {
  return (
    <div>
      <h1>{storeData.getState()}</h1>
      <div className="btns">
        <h1>
          <button>+</button>
        </h1>
        <h1>
          <button>-</button>
        </h1>
      </div>
    </div>
  );
}

export default App;
