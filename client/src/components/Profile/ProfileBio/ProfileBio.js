import React, { useState, useEffect } from "react";
import MobileDiv from "../../mobileDiv";
import { Row, Col } from "react-bootstrap/";
import axios from "axios";

const ProfileBio = ({ bio, username, reRender, setReRender }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUserInfo, setUpdatedUserInfo] = useState({
    bio
  })

  const onChange = (event) => {
    const { name, value } = event.target;
    setUpdatedUserInfo({ ...updatedUserInfo, [name]: value });
  };

  useEffect(() => {
    console.log("updatedUserInfo value:",updatedUserInfo);
  }, [updatedUserInfo])

  useEffect(() => {
    setUpdatedUserInfo({bio})
  }, [bio])

  const saveChanges = () => {
    axios
      .put(`/api/users/${username}`, updatedUserInfo)
      .then((data) => {
        setIsEditing(false);
        setReRender(!reRender);
      });
  };


  return (
    <MobileDiv>
        <Row>
        <Col></Col>
        <Col xs={8}>
          <h5>Bio</h5>
        </Col>
        <Col>
        </Col>
      </Row>
          <div className="bio">
            <p className="lead" style={{ margin: "0" }}>
              {updatedUserInfo.bio}
            </p>
          </div>
    </MobileDiv>
  );
};

export default ProfileBio;