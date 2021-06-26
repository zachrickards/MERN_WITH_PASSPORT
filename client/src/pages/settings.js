import React, { useState} from "react";
import ToggleEdit from "../components/Settings/toggle";
import Interest from "../components/interestTag";
import MobileDiv from "../components/mobileDiv";
import { Link } from "react-router-dom";
// import { EditProvider } from "../contexts/EditProvider";
import Card from "react-bootstrap/Card";
import FirstAndLast from "../components/Profile/FirstAndLast";
import { EditProvider } from "../contexts/EditProvider";

const Settings = () => {

  const [toggle, setToggle] = useState(true);
  const [button, setButton] = useState("Edit");
  const [hideInput, setHideInput] = useState("none");
  const [hideRead, setHideRead] = useState("")
  const [icon, setIcon] = useState("");
  const [color, setColor] = useState("");

  const changeButton = () => {
    if (toggle) {
      setButton("Save");
      setHideInput("");
      setHideRead("none");
      setIcon("save");
      setColor("green");
      setToggle(false);
    } else {
      setButton("Edit");
      setHideInput("none");
      setHideRead("");
      setIcon("edit");
      setColor("blue");
      setToggle(true);
    }
  } 

  return (
    <EditProvider>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            <div style={{display: `${hideRead}`}}>Card Title</div>
            <input 
              type="text"
              placeholder="Card Title"
              style={{display: `${hideInput}`}}
            />
            <button onClick={changeButton}>{button}</button>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
            <input 
              type="text"
              placeholder="userdata"
            />
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            <input 
              type="text"
              placeholder="userdata"
            />
          </Card.Text>
        </Card.Body>
      </Card>
    </EditProvider>
  );
};

    // <EditProvider>
    // <div className="text-center mt-4" style={{ overflowX: "hidden" }}>
    //   <h1>Edit Profile</h1>
    //   <MobileDiv id="edit-profile-image">
    //     <div style={{ maxWidth: `80rem` }}>
    //       <img
    //         className="img-fluid rounded-circle"
    //         src="https://via.placeholder.com/250"
    //         style={{ maxWidth: "100%", height: "auto" }}
    //       />
    //     </div>
    //     {/* TODO: MULTER IMG UPLOAD/CHANGING FUNCTIONALITY ON THIS LINK */}
    //     <div className="d-flex flex-column my-4">
    //       <div className="d-flex flex- justify-content-center">
    //         <button className="btn btn-primary btn-sm buttons">
    //           Upload new photo
    //         </button>
    //         <button className="btn btn-outline-danger buttons btn-sm ml-3">
    //           Remove
    //         </button>
    //       </div>
    //       <span className="image-size">Image format with max size of 3MB</span>
    //     </div>
    //   </MobileDiv>

    //   <MobileDiv id="user-info">
    //     <div className="d-flex flex-column">
    //       <ToggleEdit>
    //         <FirstAndLast />
    //       </ToggleEdit>

    //       <h2 style={{ fontSize: "1.5rem" }} className="text-muted">
    //         @username
    //       </h2>
    //     </div>

    //     <div>
    //       <ToggleEdit>
    //         <div
    //           className="text-muted"
    //           style={{ fontSize: "1rem", marginTop: "0px", padding: "0px" }}
    //         >
    //           <span className="mx-1">Age |</span>
    //           <span className="mx-1">Pronouns |</span>
    //           <span className="mx-1">Location</span>
    //         </div>
    //       </ToggleEdit>

    //       <ToggleEdit>
    //         <div style={{ fontSize: "1rem", marginTop: "0px", padding: "0px" }}>
    //           <div className="text-muted">
    //             <span className="mx-1">Orientation &</span>
    //             <span className="mx-1">Status</span>
    //           </div>
    //         </div>
    //       </ToggleEdit>
    //       <p>Looking for a (genderpreference) (agepref)</p>
    //     </div>

    //     <div className="mt-4" id="bio-container">
    //       <ToggleEdit>
    //         <h5>Bio</h5>
    //       </ToggleEdit>
    //       <p
    //         className="lead"
    //         style={{ fontSize: "16px", lineHeight: `1.2rem` }}
    //       >
    //         Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
    //         commodo ligula eget dolor. Aenean massa. Cum sociis natoque
    //         penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    //         Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
    //         Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
    //         aliquet nec, vulputate
    //       </p>
    //     </div>

    //     <div className="px-16 mt-3 text-center">
    //       <ToggleEdit>
    //         <h5>Interests</h5>
    //       </ToggleEdit>
    //       <div id="interests-container">
    //         <Interest>#art</Interest>
    //         <Interest>#photography</Interest>
    //         <Interest>#music</Interest>
    //       </div>
    //     </div>
    //   </MobileDiv>

    //   {/* Partner Preferences */}
    //   <MobileDiv id="partner-preferences">
    //     <h5>Partner Preferences</h5>
    //     <ToggleEdit>
    //       <span>Age Preference</span>
    //     </ToggleEdit>
    //     <div className="slidecontainer" id="age-slider">
    //       <input
    //         type="range"
    //         min="1"
    //         max="100"
    //         value="50"
    //         className="slider"
    //         id="myRange"
    //       />
    //     </div>
    //     <ToggleEdit>
    //       <span>Gender Preference</span>
    //     </ToggleEdit>
    //     <div className="slidecontainer" id="gender-slider">
    //       <input
    //         type="range"
    //         min="1"
    //         max="100"
    //         value="50"
    //         className="slider"
    //         id="myRange"
    //       />
    //     </div>
    //   </MobileDiv>

    //   {/* Advanced Settings */}
    //   <footer className="footer py-3 bg-light">
    //     <Link to="/" className="">
    //       Advanced Settings //TODO: Delete profile, etc
    //     </Link>
    //   </footer>
    // </div>
    // </EditProvider>
//   );
// };

export default Settings;