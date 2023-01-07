import React, { useState, useEffect } from "react";

const Counter = () => {
  //---------Hook--------- **********useState*******
  const [value, setValue] = useState(0);
  // value setValue initialvalue
  //  variable - value
  // setValue helps to set the value of variable
  // function name start with handle

  // ********---------UseEFFECT--------********
  // useEffect(() => { }, [])

  // empty[]  called once
  // removed[] called everytime
  // [variable] called everytime variable is chaged

  /*
      useEffect(() => {
          alert('test')
      }, [value])
      //function is called when value changes
  */

  useEffect(() => {
    alert("test");
  }, []);

  /*
  const handleOnIncrement = () => {
    // alert('Increment')
    if (value < 100) {
      setValue(value + 1);
    }
  };
  const handleOnDecrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
    //alert('Decrement')
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
