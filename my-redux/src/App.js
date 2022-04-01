import './App.css';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux'

function App() {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "INC"});
  };
  const decrement = () => {
    dispatch({ type: "DEC"});
  };
  const addBy = () => {
    dispatch({ type: "ADDBY", payload: 10});
  }
  return (
    <div>
      <h1> counter </h1>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addBy}>AddBy10</button>
    </div>
  );
}

export default App;
