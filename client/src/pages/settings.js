import React, { useEffect, useState } from "react";
import Interest from "../components/interestTag";
import MobileDiv from "../components/mobileDiv";
import { Link } from "react-router-dom";
import IntroCard from "../components/Settings/IntroCard/IntroCard";
import BioCard from "../components/Settings/BioCard/BioCard";
import InterestsCard from "../components/Settings/InterestsCard/InterestsCard";
import axios from "axios";
import PartnerPrefCard from "../components/Settings/PartnerPrefCard/PartnerPrefCard";
import DTSettings from "../components/Settings/Desktop View/DTSettings";

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
    partnerPrefs: [{ age: "" }, { gender: "" }],
  });

  const [reRender, setReRender] = useState(false);

  useEffect(() => {
    const username = JSON.parse(localStorage.getItem("user")).username;
    axios.get(`/api/users/${username}`).then((data) => {
      setUserData({
        firstName: `${data.firstName}`,
        lastName: `${data.lastName}`,
        username: `${data.username}`,
        age: `${data.age}`,
        pronouns: `${data.pronouns}`,
        location: `${data.location}`,
        gender: `${data.gender}`,
        sexuality: `${data.sexuality}`,
        status: `${data.status}`,
        bio: `${data.bio}`,
        interests: `${data.interests}`,
        genderPref: `${data.genderPref}`,
      });
      console.log(data);
    });
  }, [reRender]);

  return (
    <div>
      <DTSettings />

        {/* Advanced Settings */}
        <footer className="footer py-3 bg-light text-center">
          <Link to="/" className="">
            Advanced Settings 
            {/* TODO: Delete profile, etc */}
          </Link>
        </footer>

    </div>
  );
};

export default Settings;
