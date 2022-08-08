import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"

//components
import Header from './Header'
import Home from "./Home";
import Results from "./Results"
import Error from "./Error";

const err_msg="Please use the search bar to search for images";

// main container of the entire app
const App = ()=>{

    return (
        // browser router needed at the top so that it encapsulated header as well, for the use of useNav
        <BrowserRouter>
        <div className="container">
            <Header />
            {
                /*
                 * there are three alowable routes:
                    - / Home
                    - /:id which will reroute to results/:id, made it easier to handle things
                    - / results/ :id will search for :id and display the results
                 */
            }
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/:id" element={<Error msg={err_msg} />} />
                <Route path="results/:query" element={<Results />}/>
            </Routes>
            
            
        </div>
        </BrowserRouter>
    );
}


export default App;