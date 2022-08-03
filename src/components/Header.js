import React from "react";

// Components
import Search from "./Search";
import Nav from "./Nav";

const Header= ()=>{
    return (
        <header>
            <Search />
            <Nav />
        </header>
    );
}
export default Header;