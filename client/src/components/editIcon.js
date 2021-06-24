import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const EditIcon = () => {

    //By default no content is editable yet
    const [canEdit, setCanEdit] = useState(!false);
    const [canSave, setCanSave] = useState(false);

    //User clicks edit button
    //Field becomes an editable input field
    //Edit icon changes to a save icon
    //User clicks save icon
    //New data is saved and stored in db
    //Text changes back to read only
    //Save icon changes back to edit 

    //On edit ion click content state becomes editable
    const editContent = () => {
        if (!canEdit) {
            setCanEdit(true)
        } else setCanEdit(false);

        console.log(canEdit);
    }

    return (
        <button onClick={editContent}>
        <FontAwesomeIcon 
            icon="edit" 
            size="xs" 
            color="blue"
            className="mx-2"
        />
        </button>
    )
}

export default EditIcon;
