import React from "react";
import { useState } from "react";



function App() {

  const [count, setCount] = useState(0);
//the useState takes the initial value as the parameter in the previous line
  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>

    </div>
  )
}

export default App;
