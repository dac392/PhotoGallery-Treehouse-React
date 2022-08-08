import React from "react";

// Components
import SearchForm from "./SearchForm";
import Nav from "./depracated/Nav";

const Header= (props)=>{
    return (
        <header>
            <SearchForm search={props.fn}/>
            <Nav fn={props.fn}/>
        </header>
    );
}
export default Header;