import "../App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./CounterSlice";

const CounterReduxToolkit = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleOnClick = (inp) => {
    if (inp === "+") {
      if (count < 50) {
        dispatch(increment());
      }
    } else if (inp === "-") {
      if (count > 0) {
        dispatch(decrement());
      }
    } else {
      console.log("Error");
    }
  };

  return (
    <>
      <div className="app">
        <h2>{count}</h2>
        <button onClick={() => handleOnClick("+")}>Increment</button>
        <button onClick={() => handleOnClick("-")}>Decrement</button>
      </div>
    </>
  );
};

export default CounterReduxToolkit;
