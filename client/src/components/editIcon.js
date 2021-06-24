import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const EditIcon = () => {

    //By default no content is editable yet
    const [canEdit, setCanEdit] = useState(!false);
    const [icon, setIcon] = useState("edit");
    const [color, setColor] = useState("blue");

    //User clicks edit button
    //Field becomes an editable input field
    //Edit icon changes to a save icon
    //User clicks save icon
    //New data is saved and stored in db
    //Text changes back to read only
    //Save icon changes back to edit 

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

        //Log to see if current button state is editable or not
        console.log(canEdit, icon, color);
    }

    return (
        <button onClick={editContent}>
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
