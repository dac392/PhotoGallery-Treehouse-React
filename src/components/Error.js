import React from "react";
import { NavLink } from "react-router-dom";

// component used to display an error message
const Error = ({msg})=>{
    return (
        <section className="not-found">
            <h1>Error: 404</h1>
            <p>{(msg)? msg : ""}</p>
            <br />
            <NavLink to='/' className={"nav-btn"} >Home</NavLink>
        </section>
    );
}

export default Error;