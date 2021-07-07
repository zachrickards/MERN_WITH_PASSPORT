import React, { useState } from "react";
import EditIcon from "../Icon/Icon";
import MobileDiv from "../../mobileDiv";
import { Row, Col } from "react-bootstrap/";
import Interest from "../../interestTag";

import "./interestscard.css";

const InterestsCard = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <MobileDiv>
    <Row>
      <Col></Col>
      <Col xs={8}>
        <h5>Interests</h5>
      </Col>
      <Col>
        {" "}
        <EditIcon isEditing={isEditing} setIsEditing={setIsEditing} />
      </Col>
    </Row>
    <Row>
    {isEditing ? (
        <textarea id="interests-textarea"></textarea>
    ) : (
<div className="container">
        <Interest>#art</Interest>
        <Interest>#photography</Interest>
        <Interest>#music</Interest>
      </div>
    )}
    </Row>
  </MobileDiv>
  )
};

export default InterestsCard;
