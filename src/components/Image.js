import React from "react";

const Image = ({data})=> {
   return( 
    <li className="image"> <img src={`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}.jpg`} alt=""/> </li>
   );
}

export default Image;
