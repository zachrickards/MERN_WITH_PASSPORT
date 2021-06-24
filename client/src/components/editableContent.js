import React from "react";
import EditIcon from "./editIcon/editIcon";
import EditContext from "../contexts/editData/editContext";

const EditableContent = (props) => {
  // return (
  //   <EditContext.Consumer>
  //     {(context) => {
        return (
          <div 
        //   className={}
          >
            {props.children}
            <EditIcon />
          </div>
        );
  //     }}
  //   </EditContext.Consumer>
  // );
};

export default EditableContent;
