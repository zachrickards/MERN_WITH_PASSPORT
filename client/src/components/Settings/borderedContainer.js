import React from 'react'

const borderedContainer = (props) => {
    return (
        <div className="
        border
        rounded
        border-info">
            {props.children}
        </div>
    )
}

export default borderedContainer;
