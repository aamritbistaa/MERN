import "./App.css";
import React, { useState } from "react";

function CounterUsingUseState() {
  const [value, setValue] = useState(0);
  const handleOnClick = (inp) => {
    if (inp === "+") {
      if (value < 50) {
        setValue(value + 1);
      }
    } else if (inp === "-") {
      if (value > 0) {
        setValue(value - 1);
      }
    }
  };

  return (
    <>
      <div className="app">
        <h2>{value}</h2>
        <button onClick={() => handleOnClick("+")}>Increment</button>
        <button onClick={() => handleOnClick("-")}>Decrement</button>
      </div>
    </>
  );
}

export default CounterUsingUseState;
