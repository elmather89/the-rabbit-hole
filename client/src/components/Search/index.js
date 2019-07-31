import React from "react";
import "./style.css";

function SearchList() {
    return (
      <div className="search">
        <input
          className="search-list"
          type="text"
          placeholder="Search..."
          title="search">
        </input>
      </div>
    );
}

export default SearchList;



