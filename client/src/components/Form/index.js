import React from "react";

export function Input(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    );
}

export function CheckBox(props) {
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" {...props} />
        </div>
    );
}

export function TextArea(props) {
    return (
        <div className="form-group">
            <textarea className="form-control" rows="5" {...props} />
        </div>
    );
}

export function FormBtn(props) {
    return (
        <button {...props} style={{ float: "right" }} className="btn btn-sucess">
            {props.children}
        </button>
    );
}
