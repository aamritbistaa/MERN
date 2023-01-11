import React, { useState } from "react";
import "./App.css";

const TodoUsingUseState = () => {
  const [inputList, setInputList] = useState();
  const [items, setItems] = useState([]);
  const handleInput = (event) => {
    setInputList(event.target.value);
  };

  const handleClick = () => {
    console.log("clicked");
    setItems((olditems) => {
      return [...olditems, inputList];
    });
    setInputList("");
  };
  const handleDelete = (id) => {
    console.log("delete");
    setItems((olditems) => {
      return olditems.filter((arrayElement, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="App">
      <div className="main">
        <span>Using UseState</span>
        <h1>TODO</h1>
        <div className="content">
          <div>
            <input
              placeholder="Add an item"
              value={inputList}
              onChange={handleInput}
            />
            <button onClick={() => handleClick()}> + </button>
          </div>
          <br />
          <div className="Task">
            <div className="items">
              <ol>
                {items.map((itemval, index) => {
                  return (
                    <li key={index} id={index}>
                      <img
                        alt="X"
                        src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-cross-icon-png-image_4233409.jpg"
                        onClick={() => handleDelete(id)}
                      />
                      {itemval}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoUsingUseState;
