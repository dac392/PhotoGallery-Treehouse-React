import React from "react";

const Nav= ({fn})=>{
    return (
        <nav className="main-nav">
            <ul>
                <li><button className="nav-btn" onClick={()=>fn("sunset")}>Sunset</button></li>
                <li><button className="nav-btn" onClick={()=>fn("beach")}>Beach</button></li>
                <li><button className="nav-btn" onClick={()=>fn("waterfall")}>Waterfall</button></li>
            </ul>
        </nav>
    );
}

export default Nav;