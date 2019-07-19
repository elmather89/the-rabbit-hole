import React from "react";
import "./style.css";

function BookHeader({ children }) {
  return (
    <div className="header">{children}</div>
  );
}

export default BookHeader;