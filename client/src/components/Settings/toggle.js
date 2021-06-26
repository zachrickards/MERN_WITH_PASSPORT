import React, { useState, useContext } from "react";
import EditContext from "../../contexts/EditProvider";
import EditIcon from "./Icon/Icon";

const Toggle = (props) => {
  const { canEdit } = useContext(EditContext);
  
  return (
    <div className="d-flex justify-content-center">
      {props.children}
      {/* <EditIcon
      changeIcon={changeIcon} 
      icon={icon}
      color={color}
      /> */}
    </div>
  );
};

export default Toggle;