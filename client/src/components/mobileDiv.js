import React from 'react'

const MobileDiv = (props) => {
    return (
        <div className ="
            container 
            d-flex 
            flex-column 
            my-4 
            px-4">
            {props.children}
        </div>
    )
}

export default MobileDiv;
