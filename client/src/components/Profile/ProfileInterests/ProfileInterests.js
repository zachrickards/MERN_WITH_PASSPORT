import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap/";
// import Interest from "./InterestTag/interestTag";
import MobileDiv from "../../mobileDiv";
import axios from "axios";

const ProfileInterests = ({ interests, username, reRender, setReRender }) => {
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
        </Col>
      </Row>
      <Row>
          <div className="container">
            {/* <Interest>#art</Interest>
            <Interest>#photography</Interest>
            <Interest>#music</Interest> */}
            <p className="lead">{interests}</p>
          </div>
      </Row>
    </MobileDiv>
  );
};

export default ProfileInterests;
