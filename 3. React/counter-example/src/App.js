import "./App.css";
import React from "react";
import CounterReduxToolkit from "./ReduxToolKit/Counter_redux-toolkit";
import CounterUsingUseState from "./UseState_Counter";

function App() {
  return (
    <>
      <div className="app">
        Counter Using useState
        <CounterUsingUseState />
        Counter Using Redux Toolkit
        <CounterReduxToolkit />
      </div>
    </>
  );
}
export default App;
