import React from "react";

import Image from "./Image"
import Error from "./Error";


const ImageList = ({results, query})=>{

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