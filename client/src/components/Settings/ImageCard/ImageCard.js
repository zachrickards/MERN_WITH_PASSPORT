import React, { useState } from "react";
import { Col } from "react-bootstrap/";
import DTDiv from "../Desktop View/DTDiv/DTDiv";
import UploadPhoto from "../UploadPhoto/UploadPhoto";
import SpinnerEl from "../../Spinner";

const ImageCard = ({ username, profileImg, reRender, setReRender }) => {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <Col
      className="img-col d-flex justify-content-center align-items-center"
      md={5}
      id="edit-profile-image"
    >
      <DTDiv>
        <div style={{ maxWidth: `80rem` }} id="img-col-div">
          {loading ? (
            <div style={{ width: "315px", height: "315px" }}>
              <SpinnerEl />
            </div>
          ) : (
            <img
              className="img-fluid rounded-circle"
              src={profileImg}
              style={{ maxWidth: "315px", height: "315px" }}
            />
          )}
        </div>
        <UploadPhoto
          username={username}
          setReRender={setReRender}
          setLoading={setLoading}
          setLoaded={setLoaded}
        />
      </DTDiv>
    </Col>
  );
};

export default ImageCard;
