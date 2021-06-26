import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

const EditIcon = ({ isEditing, setIsEditing }) => {

  return (
      <FontAwesomeIcon 
      icon={ isEditing ? "save" : "edit"}
      size="xs" 
      color={ isEditing ? "green" : "blue"}
      className="mx-2"
      onClick={() => {setIsEditing(!isEditing)}}
      />
  );
};

export default EditIcon;
