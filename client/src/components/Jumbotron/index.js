import React from "react";
import "./style.css";

function Jumbotron(props) {
    return (
        <div
            {...props} style={{
                height: 300, clear: "both", paddingTop: 120, marginTop: 30, textAlign: "center",
                backgroundSize: "cover", overflow: "hidden", backgroundImage: "url(" + props.bgimg + ")"
            }}
            className="jumbotron"
        >
            {props.children}
        </div>
    );
}

export default Jumbotron;
