import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ImageList from "./ImageList"

import axios from 'axios';
import apiKey from "../config";

const Results = ()=>{
    const {query} = useParams();
    const [images, setImage] = useState([]);

    useEffect(() => {
        // 👇️ this only runs once
        console.log('useEffect ran');
        // 👇️ fetch data from remote API
        const performSearch = (query="Beach")=>{
            axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&format=json&nojsoncallback=1&per_page=24`)
            .then(response=>{
                    setImage(response.data.photos.photo);
            }).catch(error=>console.log('Error fetching and parsing data', error))
        }
        performSearch(query);
      }, [query]); // 👈️ empty dependencies array

    return (
        <ImageList results={images} query={query}/>
    );
}

export default Results;