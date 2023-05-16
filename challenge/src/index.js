import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import emojipedia from './emojipedia';


ReactDOM.render(<App />, document.getElementById("root"));


// Challenge : display an array of meanings with only 100 characters


const arr = emojipedia.map(function(item) {
        return item.meaning.substring(0,100)
})


console.log(arr);



