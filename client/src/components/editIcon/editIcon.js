import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import EditContext from "../../contexts/editData/editContext";

const EditIcon = (props) => {
  //By default no content is editable yet
  const [iconChange, setIconChange] = useState(false);
  const [icon, setIcon] = useState("edit");
  const [color, setColor] = useState("blue");

//   //Toggle edit state to true on first click, then toggle normally w/ each click
  const changeIcon = ({ icon, color }) => {
    if (!iconChange) {
      setIconChange(true);
      setIcon("save");
      setColor("green");
    } else {
      setIconChange(false);
      setIcon("edit");
      setColor("blue");
    }
  };

  //TODO:
  //RERENDER/POST NEW DATA TO DB ON SAVE

  return (
    // <EditContext.Consumer>
    //   {(context) => {
    //     const { canEdit, canSave } = context;

    //     const toggle = () => {
    //         if (canEdit) {
    //           canEdit.editContent();
    //         } else if (canSave) {
    //           canSave.saveContent();
    //         }
    //     };

    //     return (
          <button className="btn" 
          onClick={changeIcon}
          >
            <FontAwesomeIcon
              icon={icon}
              size="xs"
              color={color}
              className="mx-2"
            />
          </button>
    //     );
    //   }}
    // </EditContext.Consumer>
  );
};

export default EditIcon;
