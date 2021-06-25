import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

const EditIcon = (props) => {
  
  return (
    <button className="btn" onClick={props.changeIcon}>
      <FontAwesomeIcon 
      icon={props.icon} 
      size="xs" 
      color={props.color}
      className="mx-2" />
    </button>
  );
};

export default EditIcon;
