import React from "react";
import "./style.css";

function Button(props) {
    return (
        <button {...props} className="submission-btn">
            {props.children}
        </button>

    );
}

export default Button;