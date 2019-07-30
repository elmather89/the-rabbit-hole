import React from "react";
import "./style.css";

function CreatorBody(props) {
  return (
    <div className="creator-body">{props.children}</div>
  );
}

export default CreatorBody;