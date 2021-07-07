import React, { useState } from "react";
import { Row, Col } from "react-bootstrap/";
import Form from "react-bootstrap/Form";
import EditIcon from "../Icon/Icon";
import "./introcard.css";
import MobileDiv from "../../mobileDiv";
import axios from 'axios';
import SaveButton from "../SaveButton/SaveButton";

const IntroCard = ({ firstName, lastName, username, age, pronouns, location, orientation, status }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [canPutSave, setCanPutSave] = useState(false);

  //save function
  //get data from all input areas and make api request to save(PUT)
  //pass save function into editicon attributes
  
  const onChange = (event) => {
    const saveData = event.target.value;
    const key = event.target.id;
    console.log(isEditing, key, saveData);
  }

  const saveChanges = (event) => {
    console.log("saved");
    // const saveData = event.target.value;
    // const key = event.target.id;  
    // if (canPutSave && isEditing) {
    // axios.put(`/api/users/${username}`, `${key} : ${saveData}`)
    // .then(console.log("if")
    // setIsEditing(false));
    // }
    // console.log(isEditing, key, saveData);
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
              placeholder="LastName"
              className="name"
              onChange={onChange}
              id="lastName"
            />
            </div>
          ) : (
            <div className="name">
              <h1>{firstName}</h1>
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
              placeholder="Age"
              id="age"
              className="demographics"
            />
          </Col>
          <Col className="text-muted demographics">
            <select className="form-select demographics" aria-label="Default select example" id="pronouns">
              <option selected>Pronouns</option>
              <option value="1">He/Him</option>
              <option value="2">She/Her</option>
              <option value="3">Them/They</option>
              <option value="4">Custom</option>
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
              <option value="1">Bisexual</option>
              <option value="2">Gay</option>
              <option value="4">Straight</option>
              <option value="4">Custom</option>
            </select>
          </Col>
          <Col className="text-muted demographics">
            <select className="form-select demographics" aria-label="Default select example" id="pronouns">
              <option selected>Looking For:</option>
              <option value="1">Casual Dating</option>
              <option value="2">Friends</option>
              <option value="3">Hookups</option>
              <option value="4">Serious Commitment</option>
              <option value="4">Custom</option>
            </select>
          </Col>
        </Row>
        </div>
      ) : (
        <div>
          <Row className="text-muted demographics">
            <span className="mx-1">Age | Pronouns | Location</span>
          </Row>
          <Row className="text-muted demographics">
          <span className="mx-1">Orientation & Status</span>
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
