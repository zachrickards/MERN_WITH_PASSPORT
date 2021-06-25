import React, { createContext, useState } from "react";

const EditContext = createContext();

export const EditProvider = ({ children }) => {
    const [canEdit, setCanEdit] = useState("canEdit");

    const toggleCanEdit = () => {
        if (canEdit === "canEdit") {
            setCanEdit("canSave");
        } else {
            setCanEdit("canEdit");
        }
    }
;
    return (
        <EditContext.Provider value={{ canEdit, toggleCanEdit}}>
            {children}
        </EditContext.Provider>
    )
};

export default EditContext;
