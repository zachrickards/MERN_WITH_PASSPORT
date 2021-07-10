import React, { useState, useEffect } from "react";
import EditIcon from "../Icon/Icon";
import MobileDiv from "../../mobileDiv";
import { Row, Col } from "react-bootstrap/";
import SaveButton from "../SaveButton/SaveButton";
import axios from "axios";

import "./biocard.css";

const BioCard = ({bio, username, reRender, setReRender}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedBio, setUpdatedBio] = useState({bio})

  const onChange = (event) => {
    const { name, value } = event.target;

    setUpdatedBio({ ...updatedBio, [name]: value });
  };


  useEffect(() => {
    console.log(updatedBio);
  }, [updatedBio])

  useEffect(() => {
    setUpdatedBio({bio})
  }, [bio])

  const saveChanges = () => {
    axios
      .put(`/api/users/${username}`, updatedBio)
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
          <EditIcon isEditing={isEditing} setIsEditing={setIsEditing} />
        </Col>
      </Row>
      <Row>
      {isEditing ? (
        <div>
          <textarea
            rows="5"
            cols="50"
            placeholder={bio}
            className="bio"
            name="bio"
            onChange={e => onChange(e)}
            value={updatedBio.bio}
          />
          <SaveButton 
            saveChanges={saveChanges}/>
          </div>
        ) : (
          <div className="bio">
            <p className="lead" style={{margin: '0'}}>
              {bio}
            </p>
          </div>
        )}
      </Row>
    </MobileDiv>
  );
};

export default BioCard;
