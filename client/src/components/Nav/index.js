import React from "react";
import RHLogo from "assets/images/RHlogo.png";
import "./style.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg">
            <h3>
              <a className="navbar-brand" href="/">
                <img src={RHLogo} alt="Rabbit hOle logo"></img>
                The Rabbit hOle Creator Collection
              </a>
            </h3>
        </nav>
    );
}

export default Nav;
