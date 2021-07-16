import React from "react";
import {useHistory} from "react-router-dom";

export const AboutPage = () => {
    const history = useHistory()
    return (
        <>
            <h1>Page information</h1>
            <p>Tutorial Project to Introduce Typescript</p>
            <button className="btn" onClick={()=>history.push('/')}>Back to to-do list</button>
        </>
    )
}