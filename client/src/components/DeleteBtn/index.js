import React from "react";
import "./style.css";

function DeleteBtn(props) {
    return (
        <button {...props} className="delete-btn" role="button" tabIndex="0">
            {props.children}
        </button>
    );
}

export default DeleteBtn;
