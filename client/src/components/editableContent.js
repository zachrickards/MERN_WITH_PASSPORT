import React from 'react'

const editableContent = (props) => {
    return (
        <div className="d-flex flex-row align-items-top justify-content-center">
            {props.children}
        </div>
    )
}

export default editableContent;
