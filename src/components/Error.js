import React from "react";
import { useParams } from "react-router-dom";


const Error = ({msg})=>{
    const {id} = useParams()
    const request_failed = `Your request to /${id} could not be found`
    return (
        <section className="not-found">
            <h1>Error: 404</h1>
            <p>{request_failed}</p>
            <p>{(msg)? msg : ""}</p>
        </section>
    );
}

export default Error;