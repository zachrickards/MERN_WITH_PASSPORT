import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";


const EditIcon = () => {

    //By default no content is editable yet
    const [canEdit, setCanEdit] = useState(false);
    const [icon, setIcon] = useState("edit");
    const [color, setColor] = useState("blue");

    //Toggle edit state to true on first click, then toggle normally w/ each click
    const editContent = ({ icon, color }) => {
        if (!canEdit) {
            setCanEdit(true);
            setIcon("save");
            setColor("green")
        } else {
            setCanEdit(false);
            setIcon("edit");
            setColor("blue");
        }
    }

    return (
        <button className="btn" onClick={editContent}>
        <FontAwesomeIcon 
            icon={icon} 
            size="xs" 
            color={color}
            className="mx-2"
        />
        </button>
    )
}

export default EditIcon;
