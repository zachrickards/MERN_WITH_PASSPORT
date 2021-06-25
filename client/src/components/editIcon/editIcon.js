import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

const EditIcon = () => {
  const [toggle, setToggle] = useState(false);
  const [icon, setIcon] = useState("edit");
  const [color, setColor] = useState("blue");

  const change = () => {
    if (!toggle) {
      setToggle(true)
      setIcon("save");
      setColor("green")
    } else if (toggle) {
      setToggle(false)
      setIcon("edit");
      setColor("blue");
    }
  };

  return (
    <button className="btn" onClick={change}>
      <FontAwesomeIcon icon={icon} size="xs" color={color}className="mx-2" />
    </button>
  );
};

export default EditIcon;
