import React, { useState } from "react";
import EditIcon from "../Icon/Icon";
import MobileDiv from "../../mobileDiv";
import { Row, Col } from "react-bootstrap/";
import SaveButton from "../SaveButton/SaveButton";
import axios from "axios";

import "./biocard.css";

const BioCard = ({bio, username}) => {
  const [isEditing, setIsEditing] = useState(false);

  const onChange = (event) => {
    const key = event.target.id;
    const saveData = event.target.value;
    console.log(isEditing, key, saveData);
  }

  const saveChanges = (key, saveData) => {
    axios.put(`/api/users/${username}`, `${key} : ${saveData}`)
    .then(
      setIsEditing(false)
    )
    console.log("saved data:", "key:", key, "saveData:", saveData, "isEditing?", isEditing)
  }

  return (
    <MobileDiv>
      <Row>
        <Col></Col>
        <Col xs={8}>
          <h5>Bio</h5>
        </Col>
        <Col>
          {" "}
          <EditIcon isEditing={isEditing} setIsEditing={setIsEditing} />
        </Col>
      </Row>
      <Row>
      {isEditing ? (
        <div>
          <textarea
            rows="5"
            cols="50"
            placeholder={bio}
            className="bio"
          />
          <SaveButton 
            saveChanges={saveChanges}/>
          </div>
        ) : (
          <div className="bio">
            <p className="lead" style={{margin: '0'}}>
              {bio}
            </p>
          </div>
        )}
      </Row>
    </MobileDiv>
  );
};

export default BioCard;
