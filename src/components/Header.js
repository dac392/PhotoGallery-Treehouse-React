import React from "react";

// Components
import SearchForm from "./SearchForm";
import Nav from "./Nav";

const Header= (props)=>{
    return (
        <header>
            <SearchForm />
            <Nav />
        </header>
    );
}
export default Header;