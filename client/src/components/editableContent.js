import React from 'react'
import EditIcon from './editIcon/editIcon';

const editableContent = (props) => {
    return (
        <div className="d-flex flex-row align-items-top justify-content-center">
            {props.children}
            <EditIcon />
        </div>
    )
}

export default editableContent;
