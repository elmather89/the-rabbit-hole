import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div id="creatCard" className="card text-center creatorCard">
      <div id="cardBod" className="card-body">{props.children}</div>
    </div>
  );
}

export default Card;