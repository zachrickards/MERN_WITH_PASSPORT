import React from 'react'
import "./dtdiv.css";

const DTDiv = (props) => {
    return (
        <div className="
            container
            container 
            d-flex 
            flex-column 
            px-4
        ">
            {props.children}
        </div>
    )
}

export default DTDiv;
