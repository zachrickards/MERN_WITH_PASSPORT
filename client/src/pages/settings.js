import React from "react";
import { Link } from "react-router-dom";
import MobileDiv from "../components/mobileDiv";
import BorderBox from "../components/borderedContainer";
import EditBox from "../components/editableContent";
import Interest from "../components/interestTag";
import { EditContextProvider } from "../contexts/editData/editContext";

const Settings = () => {

  const fuck = () => console.log("fuck");
  
  return (
    // <EditContextProvider>
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
          <div className="d-flex flex-column my-4">
            <div className="d-flex flex- justify-content-center">
              <button className="btn btn-primary btn-sm buttons">
                Upload new photo
              </button>
              <button className="btn btn-outline-danger buttons btn-sm ml-3">
                Remove
              </button>
            </div>
            <span className="image-size">Image format with max size of 3MB</span>
          </div>
        </MobileDiv>

        <MobileDiv id="user-info">
            <div className="d-flex flex-column">
              <EditBox>
                <h1 style={{fontSize: '1.75rem', margin: '0px', padding: '0px'}}>FirstName LastName</h1>
                
              </EditBox>
              <EditBox>
                <h2 style={{fontSize: '1.5rem'}} className="text-muted">@username</h2>
              </EditBox>
            </div>
            <div>
              <EditBox>
                <div className="text-muted" style={{fontSize: '1rem', marginTop: '0px', padding: '0px'}}>
                  <span className="mx-1">Age |</span>
                  <span className="mx-1">Pronouns |</span>
                  <span className="mx-1">Location</span>
                  <span></span>
                </div>
              </EditBox>
              <EditBox>
                <div style={{fontSize: '1rem', marginTop: '0px', padding: '0px'}}>
                  <div className="text-muted">
                    <span className="mx-1">Orientation &</span>
                    <span className="mx-1">Status</span>
                    <span></span>
                    <p>Looking for a (genderpreference) (agepref)</p>
                  </div>
                </div>
              </EditBox>
            </div>
            <div className="mt-4" id="bio-container">
              <EditBox>
                <h5>Bio</h5>
                <span></span>
              </EditBox>
                <p className="lead" style={{fontSize: '16px', lineHeight: `1.2rem`}}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
              </p>
            </div>
                    
          <div className="px-16 mt-3 text-center"> 
            <EditBox>
              <h5>Interests</h5>
              <span></span>
            </EditBox>
            <div id="interests-container">
              <Interest>#art</Interest>
              <Interest>#photography</Interest>
              <Interest>#music</Interest>
            </div>
          </div>
        </MobileDiv>

        {/* Partner Preferences */}
        <MobileDiv id="partner-preferences">
          <h5>Partner Preferences</h5>
          <EditBox>
            <span>Age Preference
            
            </span>
          </EditBox>
          <div className="slidecontainer" id="age-slider">
            <input type="range" min="1" max="100" value="50" className="slider" id="myRange" onChange={fuck}/>
          </div>
          <EditBox>
            <span>Gender Preference</span>
          </EditBox>
          <div className="slidecontainer" id="gender-slider">
            <input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
          </div>
        </MobileDiv>

        {/* Advanced Settings */}
        <footer className="footer py-3 bg-light">
          <Link to="/" className="">
            Advanced Settings
          </Link>
        </footer>
      </div>
    // </EditContextProvider>
  );
};

export default Settings;
