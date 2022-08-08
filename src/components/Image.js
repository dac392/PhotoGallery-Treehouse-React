import React from "react";

// passing the data for an image will build the link from its meta data as the src
const Image = ({data})=> {
   return( 
    <li className="image"> <img src={`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}.jpg`} alt=""/> </li>
   );
}

export default Image;
