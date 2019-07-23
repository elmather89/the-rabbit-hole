import React from "react";
import "./style.css";

function CreatorHeader(props) {
  return (
    <div className="header">{props.children}</div>
  );
}

export default CreatorHeader;