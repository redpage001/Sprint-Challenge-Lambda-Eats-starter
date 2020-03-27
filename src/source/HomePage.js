import React from "react";
import {NavLink} from "react-router-dom";

const HomePage = () => {

    return (
        <div>
            <NavLink to={"/pizza"}>
                <button id="pizzaButton">PIZZA</button>
            </NavLink>
        </div>
    )
}

export default HomePage;