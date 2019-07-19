import React from "react";

function Jumbotron(props) {
    return (
        <div
            {...props} style={{
                height: 300, clear: "both", paddingTop: 120, textAlign: "center",
                backgroundSize: "cover", overflow: "hidden", backgroundImage: "url(" + props.bgimg + ")"
            }}
            className="jumbotron"
        >
            {props.children}
        </div>
    );
}

export default Jumbotron;
