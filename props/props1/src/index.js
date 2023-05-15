import React from "react";
import ReactDOM from "react-dom";

function Card(props) {

  return (
    <div>

      <h2>{props.name}</h2>
      <img
        src= {props.image}
        alt="avatar_img"
      />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>

  )

}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>


    <Card name = "Beyonce" image = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" tel = "+1234536663" email = "beonce@hmail.com"/>
    <Card name = "Jack Bauer" image = "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" tel = "+45635762" email = "jackjack@hmail.com"/>
    <Card name = "Chuck Norris" image = "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" tel = "+76637373" email = "norrischucknorris@hmail.com"/>

  </div>,
  document.getElementById("root")
);
