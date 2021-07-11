import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap/";
import Form from "react-bootstrap/Form";
import EditIcon from "../Icon/Icon";
import "../IntroCard/introcard.css";
import MobileDiv from "../../mobileDiv";
import axios from "axios";
import SaveButton from "../SaveButton/SaveButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./introcard.css";

const IntroCard = ({
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
      {isEditing ? (
        <div>
          <Row id="name-row">
            <Col></Col>
            <Col xs={8}>
              <div className="d-flex justify-content-center name">
                <input
                  type="text"
                  placeholder={firstName}
                  className="name"
                  onChange={(e) => onChange(e)}
                  id="firstName"
                  name="firstName"
                  value={updatedUserInfo.firstName}
                />
                <input
                  type="text"
                  placeholder={lastName}
                  className="name"
                  onChange={(e) => onChange(e)}
                  id="lastName"
                  name="lastName"
                  value={updatedUserInfo.lastName}
                />
              </div>
            </Col>
            <Col>
              <EditIcon isEditing={isEditing} setIsEditing={setIsEditing} />
            </Col>
          </Row>
          <Row className="username justify-content-center">
            <div></div>
          </Row>
          <div>
            <Row className="g-2 justify-content-center align-items-center">
              <Col className="demographics">
                <input
                  type="text"
                  placeholder={age}
                  id="age"
                  className="demographics"
                  name="age"
                  onChange={(e) => onChange(e)}
                  value={updatedUserInfo.age}
                />
              </Col>
              {/* GENDER SELECTION */}
              <Col className="text-muted demographics">
                <select
                  className="form-select demographics"
                  aria-label="Default select example"
                  id="gender"
                  onChange={(e) => onChange(e)}
                  name="gender"
                  value={updatedUserInfo.gender}
                >
                  <option selected>Gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Nonbinary">Nonbinary</option>
                  <option value="Custom">Custom</option>
                </select>
              </Col>
              {/* PRONOUNS SELECTION */}
              <Col className="text-muted demographics">
                <select
                  className="form-select demographics"
                  aria-label="Default select example"
                  id="pronouns"
                  onChange={(e) => onChange(e)}
                  name="pronouns"
                  value={updatedUserInfo.pronouns}
                >
                  <option selected>Pronouns</option>
                  <option value="He/Him">He/Him</option>
                  <option value="She/Her">She/Her</option>
                  <option value="Them/They">Them/They</option>
                  <option value="Custom">Custom</option>
                </select>
              </Col>
              <Col className="text-muted demographics">
                <Form.Control
                  type="text"
                  placeholder="Location"
                  className="demographics"
                  id="location"
                  name="location"
                  onChange={(e) => onChange(e)}
                  value={updatedUserInfo.location}
                />
              </Col>
            </Row>
            <Row>
              {/* ORIENTATION SELECTION */}
              <Col className="text-muted demographics d-flex justify-content-center">
                <select
                  className="form-select demographics"
                  aria-label="Default select example"
                  id="orientation"
                  onChange={(e) => onChange(e)}
                  name="sexuality"
                  value={updatedUserInfo.sexuality}
                >
                  <option selected>Orientation</option>
                  <option value="Bisexual">Bisexual</option>
                  <option value="Gay">Gay</option>
                  <option value="Straight">Straight</option>
                  <option value="Custom">Custom</option>
                </select>
              </Col>
              {/* STATUS SELECTION */}
              <Col className="text-muted demographics">
                <select
                  className="form-select demographics"
                  aria-label="Default select example"
                  id="status"
                  onChange={(e) => onChange(e)}
                  name="status"
                  value={updatedUserInfo.status}
                >
                  <option selected>Looking For:</option>
                  <option value="For Casual Dating">Casual Dating</option>
                  <option value="To make friends">Friends</option>
                  <option value="For Hookups">Hookups</option>
                  <option value="For A Serious Committment">
                    Serious Committment
                  </option>
                  <option value="Custom">Custom</option>
                </select>
              </Col>
              <Col>
                {/* PREF SELECTION */}
                <Col className="text-muted demographics d-flex flex-row">
                  <select
                    className="form-select demographics"
                    aria-label="Default select example"
                    id="gender-pref"
                    onChange={(e) => onChange(e)}
                    name="genderPref"
                    value={updatedUserInfo.genderPref}
                  >
                    <option selected>Preference</option>
                    <option value="Any gender">Any gender</option>
                    <option value="Men">Men</option>
                    <option value="Nonbinary people">
                      Nonbinary people
                    </option>
                    <option value="Women">Women</option>
                    <option value="Custom">Custom</option>
                  </select>
                </Col>
              </Col>
            </Row>
          </div>
          <SaveButton saveChanges={saveChanges} />
        </div>
      ) : (
        <div>
          {/* Container for name and username */}
          <Row>
            <Col></Col>
            <Col xs={8}>
              <div className="name">
                <h1>
                  {firstName} {lastName}
                </h1>
              </div>
            </Col>
            <Col>
              <EditIcon isEditing={isEditing} setIsEditing={setIsEditing} />
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
              <FontAwesomeIcon 
              icon="map-marker" color="red" /> {location}
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
      )}
    </div>
  );
};

export default IntroCard;
