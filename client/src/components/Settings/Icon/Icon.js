import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

const EditIcon = ({ isEditing, setIsEditing }) => {

  //
  return (
      <FontAwesomeIcon 
      icon={ isEditing ? "window-close" : "edit"}
      size="xs" 
      color={ isEditing ? "red" : "blue"}
      className="mx-2"
      onClick={() => {setIsEditing(!isEditing)}}
      />
  );
};

export default EditIcon;
