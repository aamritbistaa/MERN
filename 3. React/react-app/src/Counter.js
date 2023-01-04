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
  return (
    <div>
      This is counter <br />
      Value = {value}
      <br />
      <button onClick={handleOnIncrement}>Increment</button>
      {/* <button onClick={handleOnIncrement()}>Increment</button> */}
      {/* direct call the function */}
      <button onClick={handleOnDecrement}>Decrement</button>
    </div>
  );
};
export default Counter;
