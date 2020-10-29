import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement } from "./actions/counterActions";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterReducer);
  const [count, setCount] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <h2>Counter</h2>
        <div>
          <button
            onClick={() =>
              dispatch(Decrement())
            }
          >
            -
          </button>
          <div className="count">{counter}</div>
          <button
            onClick={() =>
              dispatch(Increment( counter +1 ))
            }
          >
            +
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
