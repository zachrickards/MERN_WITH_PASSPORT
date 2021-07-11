import React from 'react';
import { Col } from 'react-bootstrap/';
import DTDiv from '../Desktop View/DTDiv/DTDiv';
import UploadPhoto from '../UploadPhoto/UploadPhoto';

const ImageCard = ({username, profileImg, setReRender}) => {
    return (
        <Col className="img-col" md={5} id="edit-profile-image">
            <DTDiv>
              <div style={{ maxWidth: `80rem` }} id="img-col-div">
                <img
                  className="img-fluid rounded-circle"
                  src={profileImg}
                  style={{ maxWidth: "315px", height: "315px" }}
                />
              </div>
             <UploadPhoto 
             username={username}
             setReRender={setReRender}/>
            </DTDiv>
          </Col>
    )
}

export default ImageCard;
