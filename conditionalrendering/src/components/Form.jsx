import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />

      {/* show confirm password only if user is not registered */}

       {!props.isRegistered && (<input type="password" placeholder="Confirm Password"/>)}

      <button type="submit">
        {props.isRegistered ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Form;
