import React from "react";

// Components
import SearchForm from "./SearchForm";
import Nav from "./Nav";

// header container for Search input and the nav buttons
const Header= (props)=>{
    return (
        <header>
            <SearchForm />
            <Nav />
        </header>
    );
}
export default Header;