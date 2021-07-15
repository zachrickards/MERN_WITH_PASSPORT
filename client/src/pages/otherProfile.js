import axios from "axios";
import React, { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { LOADING, SET_USER } from "../store/actions";
import { useStoreContext } from "../store/store";
import { Image } from "cloudinary-react";
import DTOProfile from "../components/Settings/Desktop View/DTP2";
import { useParams } from 'react-router-dom'

const OtherProfile = () => {

  console.log("hit")
  let { username } = useParams();
  console.log("username ---------------------", username);


  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    pronouns: "",
    location: "",
    orientation: "",
    status: "",
    bio: "",
    interests: "",
    agePref: "",
    genderPref: "",
  });
  
  useEffect(() => {
    console.log("useEffect username", username)
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
        agePref: `${data.data.agePref}`,
        genderPref: `${data.data.genderPref}`,
      });
      console.log("useEffect setUserData results:", data);
    });
  }, []);
  //reRender goes into brackets maybe

  return (
    <>
    <DTOProfile />
    </>
  );
};

export default OtherProfile;