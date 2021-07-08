import React, { useState } from "react";
import { Row, Col } from "react-bootstrap/";
import Form from "react-bootstrap/Form";
import EditIcon from "../Icon/Icon";
import "./introcard.css";
import MobileDiv from "../../mobileDiv";
import axios from 'axios';
import SaveButton from "../SaveButton/SaveButton";

const IntroCard = ({ firstName, lastName, username, age, location, gender, pronouns, sexuality, status }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [canPutSave, setCanPutSave] = useState(false);

  //save function
  //get data from all input areas and make api request to save(PUT)
  //pass save function into editicon attributes
  const onChange = (event) => {
    const key = event.target.id;
    const saveData = event.target.value;
    console.log(key+":"+ saveData);
    return (saveData);
  }

  const saveChanges = () => {
    axios.put(`/api/users/${username}`,
    {
      firstName: onChange.value,
    })
    .then(
      setIsEditing(false)
    )
  }
  
  return (
    <MobileDiv id="user-info">
      {/* Container for name and username */}
      <Row>
        <Col></Col>
        <Col xs={8}>
          {isEditing ? (
            <div className="d-flex justify-content-center name">
            <input
              type="text"
              placeholder={firstName}
              className="name"
              onChange={onChange}
              id="firstName"
            />
            <input
              type="text"
              placeholder={lastName}
              className="name"
              onChange={onChange}
              id="lastName"
            />
            </div>
          ) : (
            <div className="name">
              <h1>{firstName} {lastName}</h1>
            </div>
          )}
        </Col>
        <Col>
          <EditIcon isEditing={isEditing} setIsEditing={setIsEditing} />
        </Col>
      </Row>
      <Row className="username justify-content-center">
        {isEditing ? (
          <div></div>
        ) : ( 
            <h2 className="text-muted">@{username}</h2>
         )} 
      </Row>

      {/* Container for age, pronouns, location, orientation, and status */}
      {isEditing ? (
        <div>
        <Row className="g-2 justify-content-center align-items-center">
          <Col className="demographics">
            <input
              type="text"
              placeholder={age}
              id="age"
              className="demographics"
            />
          </Col>
          <Col className="text-muted demographics">
            <select className="form-select demographics" aria-label="Default select example" id="pronouns">
              <option selected>Pronouns</option>
              <option value="He/Him">He/Him</option>
              <option value="She/Her">She/Her</option>
              <option value="Them/They">Them/They</option>
              <option value="Custom">Custom</option>
            </select>
          </Col>
          <Col className="text-muted demographics">
            <Form.Control type="text" placeholder="Location" className="demographics" id="location"/>
          </Col>
        </Row>
        <Row>
          <Col className="text-muted demographics">
            <select className="form-select demographics" aria-label="Default select example" id="pronouns">
              <option selected>Orientation</option>
              <option value="Bisexual">Bisexual</option>
              <option value="Gay">Gay</option>
              <option value="Straight">Straight</option>
              <option value="Custom">Custom</option>
            </select>
          </Col>
          <Col className="text-muted demographics">
            <select className="form-select demographics" aria-label="Default select example" id="pronouns">
              <option selected>Looking For:</option>
              <option value="Casual Dating">Casual Dating</option>
              <option value="Friends">Friends</option>
              <option value="Hookups">Hookups</option>
              <option value="Serious Committment">Serious Committment</option>
              <option value="Custom">Custom</option>
            </select>
          </Col>
        </Row>
        </div>
      ) : (
        <div>
          <Row className="text-muted demographics">
            <span className="mx-1">{age} | {gender}/{pronouns} | {location}</span>
          </Row>
          <Row className="text-muted demographics">
          <span className="mx-1">{sexuality} & {status}</span>
          </Row>
        </div>
      )}
      <div>
        {isEditing ? (<SaveButton 
            saveChanges={saveChanges}/>) : (<div></div>)}
      </div>
    </MobileDiv>
  );
};

export default IntroCard;
