# React


![[1.png]]

![[2.png]]
![[3.png]]

```js
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
```

## Passing parameter 
- here, to pass `+` symbol when button is clicked:
`<button onClick={() => handleOnClick("+")}>Increment</button>

## Hooks
### useState
- value setValue initialvalue
 - variable - value
- setValue helps to set the value of variable
- function name start with handle
```js
const [variable,setVariable] = useState(0)
//useState(initialvalue)
```

```js
import React, { useState, useEffect } from "react";
const Counter = () => {
  const [value, setValue] = useState(0);
  /*
  const handleOnIncrement = () => {
    if (value < 100) {
      setValue(value + 1);
    }
  };
  const handleOnDecrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  */
  const handleOnClick = (opr) => {
    if (opr === "+") {
      if (value < 100) {
        setValue(value + 1);
        alert("increse");
      }
    } else if (opr === "-") {
      if (value > 0) {
        setValue(value - 1);
        alert("decrese");
      }
    } else {
      console.alter("invalid operation");
    }
  };
  return (
    <div>
      This is counter <br />
      Value = {value}
      <br />
      <button onClick={() => handleOnClick("+")}>Increment</button>
      {/* <button onClick={handleOnIncrement()}>Increment</button> */}
      {/* <button onClick={handleOnDecrement()}>Decrement</button> */}
      {/* direct call the function goes to infinite loop*/}
      <button onClick={() => handleOnClick("-")}>Decrement</button>
    </div>
  );
};
export default Counter;
```

### useEffect
```js
useEffect(()=>{},[])
```
empty[] - called once
removed[] - called everytime
`[var] - called everytime variable is chaged`
```js
  /*
      useEffect(() => {
          alert('test')
      }, [value])
      //code inside useeffect is called when value changes
  */
  useEffect(() => {
    alert("test");
  }, [])
```

## Props
### Props Destructuring
```js
import React from "react"
const Props = (prop) => {
    const { obs } = prop
    return (
        <div>
            This is prop destructuring
            the content of obs = {obs}
        </div>
    )
}
export default Props
```

```js
import React from "react"
const Props = ({ obs }) => {
    return (
        <div>
            The conent of obs ={obs}
        </div>
    )
}
export default Props
```

