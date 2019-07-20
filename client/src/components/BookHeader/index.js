import React from "react";
import "./style.css";

function BookHeader(props) {
  return (
    <div className="header">{props.children}</div>
  );
}

export default BookHeader;