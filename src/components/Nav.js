import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = ()=>{

    let navigate = useNavigate();
    function handleSubmit(query) {
        navigate(`/results/${query}`, { replace: true });
    }

    return (
        <nav className="main-nav">
            <ul>
                <li><button className="nav-btn" onClick={()=>handleSubmit("sunset")}>Sunset</button></li>
                <li><button className="nav-btn" onClick={()=>handleSubmit("beach")}>Beach</button></li>
                <li><button className="nav-btn" onClick={()=>handleSubmit("waterfall")}>Waterfall</button></li>
            </ul>
        </nav>
    );
}
export default Nav;