import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap/";
import Interest from "../../interestTag";
import DTDiv from "./DTDiv/DTDiv";
import MobileDiv from "../../mobileDiv";
import { Link } from "react-router-dom";
import IntroCard from "../../Settings/IntroCard/IntroCard";
import BioCard from "../../Settings/BioCard/BioCard";
import InterestsCard from "../../Settings/InterestsCard/InterestsCard";
import axios from "axios";
import PartnerPrefCard from "../../Settings/PartnerPrefCard/PartnerPrefCard";

const DTSettings = () => {
  //state obj containing needed userdata to fill out card
  //need state data to be named after each card
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    pronouns: "",
    location: "",
    orientation: "",
    status: "",
    bio: "",
    interests: [],
    genderPref: ""
  });

  const [reRender, setReRender] = useState(false);

  useEffect(() => {
    const username = JSON.parse(localStorage.getItem("user")).username;
    axios.get(`/api/users/${username}`).then((data) => {
      setUserData({
        firstName: `${data.data.firstName}`,
        lastName: `${data.data.lastName}`,
        username: `${data.data.username}`,
        age: `${data.data.age}`,
        pronouns: `${data.data.pronouns}`,
        location: `${data.data.location}`,
        gender: `${data.data.gender}`,
        sexuality: `${data.data.sexuality}`,
        status: `${data.data.status}`,
        bio: `${data.data.bio}`,
        interests: `${data.data.interests}`,
        genderPref: `${data.data.genderPref}`
      });
      console.log(data);
    });
  }, [reRender]);

  return (
    <div>
      <div className="text-center mt-4 px-5" style={{ overflowX: "hidden" }}>
        <h1 style={{ marginTop: "1rem" }}>Edit Profile</h1>
        <Row className="py-5 px-3">
          <Col className="border-right" md={5} id="edit-profile-image">
            <DTDiv>
              <div style={{ maxWidth: `80rem` }} id="img-col-div">
                <img
                  className="img-fluid rounded-circle"
                  src="https://bootdey.com/img/Content/avatar/avatar6.png"
                  style={{ maxWidth: "315px", height: "auto" }}
                />
              </div>
              {/* TODO: MULTER IMG UPLOAD/CHANGING FUNCTIONALITY ON THIS LINK */}
              <div className="d-flex flex-column my-4">
                <div className="d-flex flex- justify-content-center">
                  <button className="btn btn-primary btn-sm buttons">
                    Upload new photo
                  </button>
                  <button className="btn btn-outline-danger buttons btn-sm ml-3">
                    Remove
                  </button>
                </div>
                <span className="image-size">
                  Image format with max size of 3MB
                </span>
              </div>
            </DTDiv>
          </Col>
          <Col className="border-left" md={7}>
            <DTDiv>
              <Row style={{ marginBottom: "1rem" }}>
                <IntroCard
                  setReRender={setReRender}
                  reRender={reRender}
                  firstName={userData.firstName}
                  lastName={userData.lastName}
                  username={userData.username}
                  age={userData.age}
                  location={userData.location}
                  gender={userData.gender}
                  pronouns={userData.pronouns}
                  sexuality={userData.sexuality}
                  status={userData.status}
                  genderPref={userData.genderPref}
                />
              </Row>
            </DTDiv>
            <Row>
              <BioCard
                bio={userData.bio}
                setReRender={setReRender}
                reRender={reRender}
              />
            </Row>
            <Row>
              <InterestsCard interests={userData.interests} />
            </Row>
            <Row>
              <PartnerPrefCard />
            </Row>
          </Col>
        </Row>

        {/* Advanced Settings */}
        <footer className="footer py-3 bg-light">
          <Link to="/" className="">
            Advanced Settings //TODO: Delete profile, etc
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default DTSettings;
