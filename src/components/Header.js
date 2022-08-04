import React from "react";

// Components
import Search from "./Search";
import Nav from "./Nav";

const Header= (props)=>{
    return (
        <header>
            <Search fn={props.fn}/>
            <Nav fn={props.fn}/>
        </header>
    );
}
export default Header;