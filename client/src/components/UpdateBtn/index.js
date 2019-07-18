import React from "react";
import "./style.css";

function UpdateBtn(props) {
    return (
        <span className="update-btn" {...props} role="button" tabIndex="0">
            √
        </span>
    );
}

export default UpdateBtn;