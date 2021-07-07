import React, { useState } from "react";
import EditIcon from "../Icon/Icon";
import MobileDiv from "../../mobileDiv";
import { Row, Col } from "react-bootstrap/";

import "./biocard.css";

const BioCard = () => {
  const [isEditing, setIsEditing] = useState(false);

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
          <textarea
            rows="5"
            cols="50"
            placeholder="Some quick example text to build on the card title and make up the bulk of the card's content."
            className="bio"
          />
        ) : (
          <div className="bio">
            <p className="lead">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        )}
      </Row>
    </MobileDiv>
  );
};

export default BioCard;
