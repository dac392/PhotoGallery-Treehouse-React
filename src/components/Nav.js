import React from "react";

const Nav= ({fn})=>{
    return (
        <nav className="main-nav">
            <ul>
                <li><button className="nav-btn" onClick={()=>fn("cat")}>cat</button></li>
                <li><button className="nav-btn" onClick={()=>fn("dog")}>dog</button></li>
                <li><button className="nav-btn" onClick={()=>fn("anime")}>anime</button></li>
            </ul>
        </nav>
    );
}

export default Nav;