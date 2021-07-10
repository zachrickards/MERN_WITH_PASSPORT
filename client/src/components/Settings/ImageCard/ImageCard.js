import React from 'react';
import { Col } from 'react-bootstrap/';
import DTDiv from '../Desktop View/DTDiv/DTDiv';
import UploadPhoto from '../UploadPhoto/UploadPhoto';

const ImageCard = ({username}) => {
    return (
        <Col className="img-col" md={5} id="edit-profile-image">
            <DTDiv>
              <div style={{ maxWidth: `80rem` }} id="img-col-div">
                <img
                  className="img-fluid rounded-circle"
                  src="https://bootdey.com/img/Content/avatar/avatar6.png"
                  style={{ maxWidth: "315px", height: "auto" }}
                />
              </div>
              {/* TODO: MULTER IMG UPLOAD/CHANGING FUNCTIONALITY ON THIS LINK */}
             <UploadPhoto 
             username={username}/>
            </DTDiv>
          </Col>
    )
}

export default ImageCard;
