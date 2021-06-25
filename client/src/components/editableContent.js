import React, { useState } from "react";
import EditIcon from "./editIcon/editIcon";
import InputGroup from "react-bootstrap/InputGroup";

const EditableContent = (props) => {

  const [canSave, setCanSave] = useState(true);
  const [icon, setIcon] = useState("save");
  const [color, setColor] = useState("green");
  const [saveClass, setSaveClass] = useState("input-group-text");

  const changeState = () => {
    setCanSave(canSave ? false : canSave);
    setIcon(icon === "edit" ? "save" : "edit");
    setColor(color === "blue" ? "green" : "blue");
    setSaveClass(
      saveClass === "d-flex flex-row align-items-top justify-content-center"
        ? "input-group-text"
        : "d-flex flex-row align-items-top justify-content-center"
    );
  };

  return (
    <div className="">
      {props.children}
      <EditIcon />
    </div>
  );
};

export default EditableContent;
