import React, {useState, useEffect} from "react";

import axios from 'axios';
import apiKey from "../config";

import ImageList from "./ImageList";

const msg = "No results could be found for your search"

// page displayed on firt load. 
const Home = (props)=>{ 
    // uses useState and useEffect, to make sure that perform search is only being loaded in once
     
    const [data, setImage] = useState([]);
    useEffect(() => {
        // 👇️ fetch data from remote API
        const performSearch = (query="Beach")=>{
            axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&format=json&nojsoncallback=1&per_page=24`)
            .then(response=>{
                    setImage(response.data.photos.photo);
            }).catch(error=>console.log('Error fetching and parsing data', error))
        }
        performSearch();
      }, []); // 👈️ empty dependencies array

      return (
        <ImageList results={data} query={"/"} msg={msg}/>
    );
}

export default Home;