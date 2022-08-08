import React from "react";
import { useParams } from "react-router-dom";
import Image from "./Image"
import Error from "./Error";


const ImageList = ({search})=>{
    const {query} = useParams();
    const results = search(query)
    let list;
    if(results){
        list = results.map( img=><Image data={img} key={img.id} />);
    }else{
        const msg = `Your request to /${query} could not be fulfilled`
        list = <Error msg={msg}/>
    }
    return (
        <ul className="photo-container">
            {list}
        </ul>
    );
}

export default ImageList;