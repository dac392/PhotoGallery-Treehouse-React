import React from "react";
import Image from "./Image"
import Error from "./Error";

const ImageList = props=>{
    const results = props.data
    let imgs;
    if(results.length > 0){
        const url_link = 
        imgs = results.map( img => <Image data={img} key={img.id}/>);
    }else{
        imgs = Error;
    }
    return (
        <ul>
            {imgs}
        </ul>
    );
}

export default ImageList;