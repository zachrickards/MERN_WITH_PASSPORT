import React, { useState } from "react";
import EditIcon from "./Icon/Icon";

const Toggle = (props) => {
  const [toggle, setToggle] = useState(false);
  const [icon, setIcon] = useState("edit");
  const [color, setColor] = useState("blue");
 
  const changeIcon = () => {
    if (!toggle) {
      setToggle(true)
      setIcon("save");
      setColor("green");
      console.log("can save")
    } else if (toggle) {
      setToggle(false)
      setIcon("edit");
      setColor("blue");
      console.log("can edit")
    }
  };

  return (
    <div className="d-flex justify-content-center">
      {props.children}
      <EditIcon
      changeIcon={changeIcon} 
      icon={icon}
      color={color}
      />
    </div>
  );
};

export default Toggle;