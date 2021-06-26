import React, { createContext, useState } from "react";

const EditContext = createContext();

export const EditProvider = ({ children }) => {
    const [canEdit, setCanEdit] = useState("canEdit");
    // const [toggle, setToggle] = useState(false);
    // const [icon, setIcon] = useState("edit");
    // const [color, setColor] = useState("blue");

    // const changeIcon = () => {
    // if (!toggle) {
    //   setToggle(true)
    //   setIcon("save");
    //   setColor("green");
    //   console.log("can save")
    // } else if (toggle) {
    //   setToggle(false)
    //   setIcon("edit");
    //   setColor("blue");
    //   console.log("can edit")
    // }
    // };

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
