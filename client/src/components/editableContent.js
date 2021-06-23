import React from 'react'

const editableContent = (props) => {
    return (
        <div className="d-flex flex-row align-items-center justify-content-around">
            {props.children}
        </div>
    )
}

export default editableContent;
