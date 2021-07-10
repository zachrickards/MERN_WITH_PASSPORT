import React, { useState, useEffect } from "react";
import EditIcon from "../Icon/Icon";
import MobileDiv from "../../mobileDiv";
import { Row, Col } from "react-bootstrap/";
import Interest from "./InterestTag/interestTag";
import "./interestscard.css";
import SaveButton from "../SaveButton/SaveButton";
import axios from "axios";

const InterestsCard = ({ interests, username, reRender, setReRender }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUserInfo, setUpdatedUserInfo] = useState({
    interests,
  });

  const onChange = (event) => {
    const { name, value } = event.target;

    setUpdatedUserInfo({ ...updatedUserInfo, [name]: value });
  };

  useEffect(() => {
    console.log(updatedUserInfo);
  }, [updatedUserInfo]);

  useEffect(() => {
    setUpdatedUserInfo({ interests });
  }, [interests]);

  const saveChanges = () => {
    axios.put(`/api/users/${username}`, updatedUserInfo).then((data) => {
      setIsEditing(false);
      setReRender(!reRender);
    });
  };

  return (
    <MobileDiv className="border">
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
          <div>
            <textarea
              placeholder={interests}
              className="interests"
              onChange={(e) => onChange(e)}
              id="interests"
              name="interests"
              value={updatedUserInfo.interests}
              rows="5"
              cols="60"
            />
            <div>
              <SaveButton saveChanges={saveChanges} />
            </div>
          </div>
        ) : (
          <div className="container">
            {/* <Interest>#art</Interest>
            <Interest>#photography</Interest>
            <Interest>#music</Interest> */}
            <p className="lead">{interests}</p>
          </div>
        )}
      </Row>
    </MobileDiv>
  );
};

export default InterestsCard;
