import React from "react";
import Image from "./Image";
import Error from "./Error";

const msg = "No results could be found for your search"

const Home = async (props)=>{ 
    const data = await props.search()
    let final;

    if(data.length > 0){
        final = data.map( img=> <Image data={img} key={img.id} />);
    }else{
        final = <Error msg={msg}/>
    }
    return (
        <ul className="photo-container">
            {final}
        </ul>
    );
}

export default Home;