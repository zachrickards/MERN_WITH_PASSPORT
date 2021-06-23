import axios from "axios";
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { LOADING, SET_USER } from "../store/actions";
import { useStoreContext } from "../store/store";
import MobileDiv from "../components/mobileDiv";
import EditIcon from "../components/editIcon";
import BorderBox from "../components/borderedContainer";
import EditBox from "../components/editableContent";

const Settings = () => {
  return (
    <div className="text-center mt-4" style={{ overflowX: "hidden" }}>
      {/* Delete profile
     User profile pics - yellow
    Link component - blue
    Hamburger menu/drop down menu - purple
    Dot sliders - dark gray
    Forms - blue refer to Google Slides
 */}
      <h1>Edit Profile</h1>
      <MobileDiv id="edit-profile-image">
        <div style={{maxWidth: `80rem`}}>
          <img
            className="img-fluid rounded-circle"
            src="https://via.placeholder.com/250"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        {/* TODO: MULTER IMG UPLOAD/CHANGING FUNCTIONALITY ON THIS LINK */}
        <div class="d-flex flex-column my-4">
          <div class="d-flex flex- justify-content-center">
            <button class="btn btn-primary btn-sm buttons">
              Upload new photo
            </button>
            <button class="btn btn-outline-danger buttons btn-sm ml-3">
              Remove
            </button>
          </div>
          <span class="image-size">Image format with max size of 3MB</span>
        </div>
      </MobileDiv>

      <MobileDiv id="user-info">
          <div classname="d-flex flex-column">
            <EditBox>
              <h1 style={{fontSize: '1.75rem', margin: '0px', padding: '0px'}}>FirstName LastName</h1>
              <EditIcon />
            </EditBox>
            <h2 style={{fontSize: '1.5rem'}} className="text-muted">@username</h2>
          </div>
          <div>
            <EditBox>
              <small class="text-muted" style={{fontSize: '1.5rem', marginTop: '0px', padding: '0px'}}>
                <span className="mx-1">Age |</span>
                <span className="mx-1">Pronouns |</span>
                <span className="mx-1">Location</span>
                <span><EditIcon /></span>
              </small>
            </EditBox>
            <div style={{fontSize: '1.3rem', marginTop: '0px', padding: '0px'}}>
              <small class="text-muted">
                <span className="mx-1">Orientation &</span>
                <span className="mx-1">Status</span>
                <span><EditIcon /></span>
                <p>Looking for a (genderpreference) (agepref)</p>
              </small>
            </div>
          </div>
          <div className="mt-4" id="bio-container">
            <h5>Bio</h5>
            <span><EditIcon /></span>
            <p className="lead" style={{fontSize: '16px', lineHeight: `1.2rem`}}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
          </p>
          </div>
                  
        <div class="px-16 mt-3 text-center"> 
          <h5>Interests</h5>
          <span><EditIcon /></span>
          <span class="bg-gray-100 h-5 p-1 px-3 rounded cursor-pointer hover:shadow hover:bg-gray-200">#art</span> <span class="bg-gray-100 h-5 p-1 px-3 rounded cursor-pointer hover:shadow hover:bg-gray-200">#photography</span> 
          <span class="bg-gray-100 h-5 p-1 px-3 rounded cursor-pointer hover:shadow hover:bg-gray-200">#music</span> 
        </div>
      </MobileDiv>

      {/* Partner Preferences */}
      <MobileDiv id="partner-preferences">
        <h5>Partner Preferences</h5>
        <span>Age Preference
        <EditIcon />
        </span>
        <div class="slidecontainer">
          <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
        </div>
        <span>Gender Preference
        <EditIcon/>
        </span>
        <div class="slidecontainer">
          <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
        </div>
      </MobileDiv>

      {/* Advanced Settings */}
      <footer className="footer py-3 bg-light">
        <Link to="/" className="">
          Advanced Settings
        </Link>
      </footer>
    </div>
  );
};

export default Settings;
