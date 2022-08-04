import React from "react";

// Components
import Search from "./Search";
import Nav from "./Nav";

const Header= (props)=>{
    return (
        <header>
            <Search fn={props.fn}/>
            <Nav fn={props.fn}/>
            <h1>Results</h1>
        </header>
    );
}
export default Header;