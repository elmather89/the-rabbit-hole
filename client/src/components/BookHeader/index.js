import React from "react";

function BookHeader({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="header"
    >
      {children}
    </div>
  );
}

export default BookHeader;