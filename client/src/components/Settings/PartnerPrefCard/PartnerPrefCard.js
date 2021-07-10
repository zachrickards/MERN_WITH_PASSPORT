import React, { useState, useEffect } from "react";
import EditIcon from "../Icon/Icon";
import MobileDiv from "../../mobileDiv";
import { Row, Col } from "react-bootstrap/";
import axios from "axios";
import SaveButton from "../SaveButton/SaveButton";
import "./partnerprefcard.css";
// import "bootstrap/dist/css/bootstrap.css";
// import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
// import RangeSlider from "react-bootstrap-range-slider";

import "./partnerprefcard.css";

const PartnerPrefCard = ({
  agePref,
  genderPref,
  username,
  reRender,
  setReRender,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  // const [value, setValue] = useState(0);
  const [updatedUserInfo, setUpdatedUserInfo] = useState({
    agePref,
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
      agePref,
      genderPref,
    });
  }, [agePref, genderPref]);

  const saveChanges = () => {
    axios.put(`/api/users/${username}`, updatedUserInfo).then((data) => {
      setIsEditing(false);
      setReRender(!reRender);
    });
  };

  return (
    <MobileDiv id="partner-preferences" className="border">
      <div>
        <Row>
          <Col></Col>
          <Col xs={8}>
            <h5>Partner Preferences</h5>
          </Col>
          <Col>
            <EditIcon isEditing={isEditing} setIsEditing={setIsEditing} />
          </Col>
        </Row>

        {isEditing ? (
          <div>
            <Row>
              <span>Age Preference</span>

              <div className="slidecontainer" id="age-slider">
                <input
                  type="text"
                  placeholder={agePref.bottomOfRange}
                  id="age"
                  className="agePref"
                  name="age"
                  onChange={(e) => onChange(e)}
                  value={updatedUserInfo.agePref.bottomOfRange}
                />
                <span className="p1"> - </span>
                <input
                  type="text"
                  placeholder={agePref.topOfRange}
                  id="age"
                  className="agePref"
                  name="age"
                  onChange={(e) => onChange(e)}
                  value={updatedUserInfo.agePref.topOfRange}
                />
              </div>

              {/* <RangeSlider
          value={value}
          onChange={(changeEvent) => setValue(changeEvent.target.value)}
        /> */}
            </Row>
            <Row className="d-flex flex-column align-items-center dropdowncontainer">
              <span>Gender Preference</span>

              <select
                style={{ width: "40%" }}
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
                <option value="Nonbinary individuals">
                  Nonbinary individuals
                </option>
                <option value="Women">Women</option>
                <option value="Custom">Custom</option>
              </select>

              <div>
                <SaveButton saveChanges={saveChanges} />
              </div>
              {/* <div className="slidecontainer" id="gender-slider">
          <input
            type="range"
            min="1"
            max="3"
            value="2"
            className="slider"
            id="myRange"
            size="lg"
          />
        </div> */}
            </Row>
          </div>
        ) : (
          <div className="d-flex flex-column align-items-center">
            <Row>
              <span>Age Preference</span>

              <div className="slidecontainer" id="age-slider">
                <p className="lead">
                  {updatedUserInfo.agePref.bottomOfRange} 
                  # - #
                  {updatedUserInfo.agePref.topOfRange}
                </p>
              </div>

              {/* <RangeSlider
          value={value}
          onChange={(changeEvent) => setValue(changeEvent.target.value)}
        /> */}
            </Row>
            <Row style={{ width: "50%" }}>
              <span>Gender Preference</span>

              <p className="lead">{updatedUserInfo.genderPref}</p>

              {/* <div className="slidecontainer" id="gender-slider">
          <input
            type="range"
            min="1"
            max="3"
            value="2"
            className="slider"
            id="myRange"
            size="lg"
          />
        </div> */}
            </Row>
          </div>
        )}
      </div>
    </MobileDiv>
  );
};

export default PartnerPrefCard;
