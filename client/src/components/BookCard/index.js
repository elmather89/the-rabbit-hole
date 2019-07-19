import React from "react";
import "./style.css";

function BookCard(props) {
    return (
      <div className="card">
        <div className="card-body">{props.children}</div>
      </div>
    )
};

export default BookCard;