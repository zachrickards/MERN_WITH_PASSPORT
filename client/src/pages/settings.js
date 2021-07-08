import React, {useEffect, useState} from "react";
import Interest from "../components/interestTag";
import MobileDiv from "../components/mobileDiv";
import { Link } from "react-router-dom";
import IntroCard from "../components/Settings/IntroCard/IntroCard";
import BioCard from "../components/Settings/BioCard/BioCard";
import InterestsCard from "../components/Settings/InterestsCard/InterestsCard";
import axios from "axios";
import PartnerPrefCard from "../components/Settings/PartnerPrefCard/PartnerPrefCard";

const Settings = () => {

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
    partnerPrefs: [
      {age: ""},
      {gender: ""}
    ]
  });

  useEffect(() => {
    const username = JSON.parse(localStorage.getItem("user")).username;
    axios.get(`/api/users/${username}`)
    .then((data) => {
      setUserData({
        firstName: `${data.data.firstName}`,
        lastName: `${data.data.lastName}`,
        username: `${username}`,
        age: `${data.data.age}`,
        pronouns: `${data.data.pronouns}`,
        location: `${data.data.location}`,
        gender: `${data.data.gender}`,
        sexuality: `${data.data.sexuality}`,
        status: `${data.data.status}`,
        bio: `${data.data.bio}`,
        interests: `${data.data.interests}`,
        partnerPrefs: [
          {age: ""},
          {gender: ""}
        ]
      })
      console.log(data)
    })
  },[])

  console.log(userData.firstName);

  return (
    <div>
      <div className="text-center mt-4" style={{ overflowX: "hidden" }}>
        <h1>Edit Profile</h1>
        <MobileDiv id="edit-profile-image">
          <div style={{ maxWidth: `80rem` }}>
            <img
              className="img-fluid rounded-circle"
              src="https://via.placeholder.com/250"
              style={{ maxWidth: "100%", height: "auto" }}
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
        </MobileDiv>

        <IntroCard 
        firstName={userData.firstName}
        lastName={userData.lastName}
        username={userData.username}
        age={userData.age}
        location={userData.location}
        gender={userData.gender}
        pronouns={userData.pronouns}
        sexuality={userData.sexuality}
        status={userData.status}
        />
        <BioCard 
        bio={userData.bio}
        />
        <InterestsCard
        interests={userData.interests}
        />
        <PartnerPrefCard />

        
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

export default Settings;
