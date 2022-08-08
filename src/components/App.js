import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,

} from "react-router-dom"
// import axios from 'axios';
// import apiKey from "../config";

//components
import Header from './Header'
import Home from "./Home";
import Results from "./Results"
import Error from "./Error";

const err_msg="Please use the search bar to search for images";

const App = ()=>{

    // const performSearch = (query="Beach")=>{
    //     axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&format=json&nojsoncallback=1&per_page=24`)
    //     .then(response=>{
    //             setImage(response.data.photos.photo);
    //     }).catch(error=>console.log('Error fetching and parsing data', error))

    //     return(image)

    // }

    return (
        <BrowserRouter>
        <div className="container">
            <Header />
            
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