import React from "react";
import {NavLink} from "react-router-dom";

const Navigation = () => {

    return (
        <div>
            <NavLink to={"/"}>
                <button id="homeButton">HOME</button>
            </NavLink>
        </div>
    )
}

export default Navigation;