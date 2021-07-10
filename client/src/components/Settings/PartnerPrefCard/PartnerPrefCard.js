import React, { useState } from "react";
import EditIcon from "../Icon/Icon";
import MobileDiv from "../../mobileDiv";
import { Row, Col } from "react-bootstrap/";

import "./partnerprefcard.css";

const PartnerPrefCard = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <MobileDiv id="partner-preferences" className="border">
      <Row>
        <Col></Col>
        <Col xs={8}>
          <h5>Partner Preferences</h5>
        </Col>
        <Col>
          <EditIcon isEditing={isEditing} setIsEditing={setIsEditing} />
        </Col>
      </Row>
      <Row>
        <span>Age Preference</span>

        <div className="slidecontainer" id="age-slider">
          <input
            type="range"
            min="1"
            max="100"
            value="50"
            className="slider"
            id="myRange"
          />
        </div>
      </Row>
      <Row>
        <span>Gender Preference</span>

        <div className="slidecontainer" id="gender-slider">
          <input
            type="range"
            min="1"
            max="100"
            value="50"
            className="slider"
            id="myRange"
          />
        </div>
      </Row>
    </MobileDiv>
  );
};

export default PartnerPrefCard;
