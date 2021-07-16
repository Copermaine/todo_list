import React from "react";
import { NavLink} from "react-router-dom";


export const Navbar: React.FunctionComponent = () => {

    return(
        <nav>
            <div className="nav-wrapper light-blue darken-4 px1">
                <a href="/" className="brand-logo">React & Typescript</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/">To-Do list </NavLink></li>
                    <li><NavLink to="/about">Info</NavLink></li>
                </ul>
            </div>
        </nav>

    )
}


