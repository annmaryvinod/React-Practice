import React, { useState } from "react";

function App() {

  const [text,setText] = useState("Hello");
  function handleClick(){
    setText("Submitted");
  }

  const[isMouseOver,setMouseOver] = useState(false);
  function handleMouseOver(){
    setMouseOver(true);
  }

  
  function handleMouseOut(){
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{text}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
      style={{backgroundColor: isMouseOver ? "black" : "white"}}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut = {handleMouseOut}
      
      >Submit</button>
    </div>
  );
}

export default App;
