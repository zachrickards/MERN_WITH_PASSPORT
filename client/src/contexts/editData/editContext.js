import React, { createContext, useState } from "react";

const EditContext = React.createContext();

export const EditContextProvider = (props) => {
    //By default no content is editable yet and all icons are the blue 'edit' icon
    const [canEdit, setCanEdit] = useState({
        icon: 'edit',
        color: 'blue',
        readonly: 'd-flex flex-row align-items-top justify-content-center',
        editContent: () => {
            setCanEdit(true);
            console.log("canEdit is", canEdit.editable);
        }
    });

    const [canSave, setCanSave] = useState({
        icon: 'save',
        color: 'green',
        textarea: 'textarea',
        saveContent: ()  => {
            setCanSave(true);
            console.log("canSave is", canSave.saveable)
            //update request
        }
    });

    return (
        <EditContext.Provider value={{ canEdit, canSave }}>
            {props.children}
        </EditContext.Provider>
    )
};

export default EditContext;
