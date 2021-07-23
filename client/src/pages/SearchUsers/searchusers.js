import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { LOADING, SET_USER } from "../../store/actions";
import { useStoreContext } from "../../store/store";
import Matchcard from "../../components/matchcard";
import API from '../../utils/API';
import SearchUserNav from "../../components/SearchUserNav/SearchUserNav";
import "./searchuser.css";
import SwipeDateEl from "../../components/SearchUserNav/SwipeDate/SwipeDateEl";
import LocationEl from "../../components/SearchUserNav/Location/LocationEl";
import DatingStatusEl from "../../components/SearchUserNav/DatingStatus/DatingStatusEl";
import AgeEl from "../../components/SearchUserNav/Age/AgeEl";
import CompatibilityEl from "../../components/SearchUserNav/Compatibility/CompatibilityEl";
import GenderEl from "../../components/SearchUserNav/Gender/GenderEl";
import SortByEl from "../../components/SearchUserNav/SortBy/SortByEl";

let singleTrueRange = 0;

let userSeed = [
  {
    username: "Jerry223",
    password: "1234",
    firstName: "Jerry",
    lastName: "Adams",
    age: "43",
    location: "New York City",
    gender: "Male",
    pronouns: ["Him", "He"],
    sexuality: "",
    status: "Ready to commit",
    bio: "I'm a cool guy looking to have fun",
    interests: "Having fun",
    yesSwipes: [],
    noSwipes: [],
    matches: [],
  },
  {
    username: "Martha115",
    password: "5890",
    firstName: "Maddams",
    lastName: "Adams",
    age: "41",
    location: "North Carolina",
    gender: "Female",
    pronouns: ["Her", "She"],
    sexuality: "",
    status: "Ready to commit",
    bio: "I'm a cool girl looking to have fun",
    interests: "Sewing",
    yesSwipes: [],
    noSwipes: [],
    matches: [],
  },
  {
    username: "Rachel890",
    password: "1568",
    firstName: "Rachel",
    lastName: "Smith",
    age: "33",
    location: "Delaware",
    gender: "Female",
    pronouns: ["Her", "She"],
    sexuality: "",
    status: "Ready to commit",
    bio: "I'm a nice gal",
    interests: "Fishing",
    yesSwipes: [],
    noSwipes: [],
    matches: [],
  },
];
const SearchUsers = () => {
  const [currentFilter, setCurrentFilter] = useState();
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth)
  };
  
  const breakpoint = 1000;
  
//   .filter((user) =>
//   ageRanges
//     .filter((range, index) => activeAgeRange[index])
//     .filter(
//       (trueRange) => (singleTrueRange = trueRange.split("-")),

//       user.age > singleTrueRange[0] &&
//         user.age < singleTrueRange[1]
//     )
// )

  const [matches, setMatches] = useState(null);

  const getMatchData = async () => {
    const matchData = await API.Match.findAllMatchesModified();

    console.log(matchData.data);
    setMatches(matchData.data);
  }

  useEffect(() => {
    getMatchData()
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width])

  return (
    <div class="container">
      <div class="row">
      {width < breakpoint ? (
      <div className="d-flex justify-content-center">
        <SearchUserNav/>
      </div>
    ):(
      
        <div class="col-lg-3">
          <div class="sidebar">
            {/* <div class="widget border-0">
              <div class="search">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Search Keywords"
                />
              </div>
            </div>
            <div class="widget border-0">
              <div class="locations">
                <input
                  class="form-control"
                  type="text"
                  placeholder="All Locations"
                />
              </div>
            </div> */}

            <SwipeDateEl />
            <LocationEl />
            <DatingStatusEl />
            <AgeEl />
            <CompatibilityEl />
            <GenderEl />

            <div class="widget border-0">
              <div class="widget-add">
                <img class="img-fluid" src="images/add-banner.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      
    )}
      <div class="col-lg-9">
          <div class="row mb-4">
            <div class="col-12">
              <h6 class="mb-0">
                {/* Showing 1-10 of{" "} */}
                {/* <span class="text-primary">{userSeed.length} Matches</span> */}
              </h6>
            </div>
          </div>
          <SortByEl />
          <div class="row">
            {matches && matches.map((user) => (
              
                <Matchcard
                  firstName={user.firstName}
                  lastName={user.lastName}
                  age={user.age}
                  location={user.location}
                  interests={user.interests}
                  pronouns={user.pronouns}
                  username={user.username}
                  publicId={user.profileImg.public_id}
                />

              ))}
          </div>
          <div class="row">
            <div class="col-12 text-center mt-4 mt-sm-5">
              <ul class="pagination justify-content-center mb-0">
                <li class="page-item disabled">
                  {" "}
                  <span class="page-link">Prev</span>{" "}
                </li>
                <li class="page-item active" aria-current="page">
                  <span class="page-link">1 </span>{" "}
                  <span class="sr-only">(current)</span>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    ...
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    25
                  </a>
                </li>
                <li class="page-item">
                  {" "}
                  <a class="page-link" href="#">
                    Next
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
    </div>
  );
};

export default SearchUsers;
