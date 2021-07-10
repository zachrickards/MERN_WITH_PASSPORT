import React from 'react';
import { Col } from 'react-bootstrap/';
import DTDiv from '../../Settings/Desktop View/DTDiv/DTDiv';

const ProfileImage = ({username}) => {
    return (
        <Col className="border-right" md={5} id="edit-profile-image">
            <DTDiv>
              <div style={{ maxWidth: `80rem` }} id="img-col-div">
                <img
                  className="img-fluid rounded-circle"
                  src="https://bootdey.com/img/Content/avatar/avatar6.png"
                  style={{ maxWidth: "315px", height: "auto" }}
                />
              </div>
            </DTDiv>
          </Col>
    )
}

export default ProfileImage;
