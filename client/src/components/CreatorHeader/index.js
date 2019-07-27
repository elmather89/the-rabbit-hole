import React from "react";
import "./style.css";

function CreatorHeader(props) {
  return (
    <div className="creator-header">{props.children}</div>
  );
}

export default CreatorHeader;