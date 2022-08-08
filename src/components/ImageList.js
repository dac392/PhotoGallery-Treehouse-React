import React from "react";

import Image from "./Image"
import Error from "./Error";

// builds the list of images for display
const ImageList = ({results, query})=>{

    let list;
    if(results.length>0){
        list = results.map( img=><Image data={img} key={img.id} />);
    }else{
        const msg = `Your request to /${query} could not be fulfilled`
        list = <Error msg={msg}/>
    }

    // in case of Home
    if(query==="/"){
        query="Results"
    }

    return (
        <div>
        <h3>{query.toUpperCase()}</h3>
        <ul className="photo-container">
            {list}
        </ul>
        </div>

    );
}

export default ImageList;