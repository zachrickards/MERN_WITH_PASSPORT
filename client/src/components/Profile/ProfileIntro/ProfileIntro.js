import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap/";
import Form from "react-bootstrap/Form";
import EditIcon from "../../Settings/Icon/Icon";
import MobileDiv from "../../mobileDiv";
import axios from "axios";
import SaveButton from "../../Settings/SaveButton/SaveButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./profileintro.css";


const ProfileIntro = ({
  firstName,
  lastName,
  username,
  age,
  location,
  gender,
  pronouns,
  sexuality,
  status,
  reRender,
  setReRender,
  genderPref,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUserInfo, setUpdatedUserInfo] = useState({
    firstName,
    lastName,
    age,
    location,
    gender,
    pronouns,
    sexuality,
    status,
    genderPref,
  });

  const onChange = (event) => {
    const { name, value } = event.target;

    setUpdatedUserInfo({ ...updatedUserInfo, [name]: value });
  };

  useEffect(() => {
    console.log(updatedUserInfo);
  }, [updatedUserInfo]);

  useEffect(() => {
    setUpdatedUserInfo({
      firstName,
      lastName,
      age,
      location,
      gender,
      pronouns,
      sexuality,
      status,
      genderPref,
    });
  }, [
    firstName,
    lastName,
    age,
    location,
    gender,
    pronouns,
    sexuality,
    status,
    genderPref,
  ]);

  const saveChanges = () => {
    axios.put(`/api/users/${username}`, updatedUserInfo).then((data) => {
      setIsEditing(false);
      setReRender(!reRender);
    });
  };

  return (
        <div>
          {/* Container for name and username */}
          <Row>
            <Col></Col>
            <Col xs={4}>
              <div className="name">
                <h1>
                  {firstName} {lastName}
                </h1>
              </div>
            </Col>
            <Col>
            </Col>
          </Row>
          <Row className="username justify-content-center">
            <h2 className="text-muted">@{username}</h2>
          </Row>

          {/* Container for age, pronouns, location, orientation, and status */}
          <div>
          <Row className="demographics">
              <p className="lead mx-1" style={{marginBottom: '0'}}>
                {age} | {gender} ({pronouns}) | {sexuality}
              </p>
            </Row>
            <Row className="demographics">
              <p className="lead mx-1" style={{marginBottom: '0'}}>
              <FontAwesomeIcon icon="map-marker" color="red"/> {location}
              </p>
            </Row>
            <Row className="demographics">
              <p className="lead mx-1">
                Looking {status.toLowerCase()} with {genderPref.toLowerCase()}
              </p>
            </Row>
          </div>
          <div>
            <div></div>
          </div>
        </div>
  );
};

export default ProfileIntro;