import React from "react";
import TernaryOpeartor from "./TernaryOperator";
import Counter from "./Counter";
import Props from "./Props";
function App() {
  return (
    <div className="App">
      <TernaryOpeartor
        user1="My name is amrit bista"
        class1="This is react class"
      />
      <Counter />

      <Props obs='OBJECT DESTRUCT' />
    </div>
  );
}

export default App;
