import React, { useState } from "react";

function App() {

  const [name,setName] = useState("");
  function handleChange(event){
    setName(event.target.value);
  }
   const [isClicked,setClick] = useState(false);
  function handleClick(event){
    setClick(true);
   
  }
  return (
    <div className="container">
      <h1>Hello {isClicked ?  name : null} </h1>
      <input 
      onChange={handleChange}
      type="text" placeholder="What's your name?"  value = {name}/>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
