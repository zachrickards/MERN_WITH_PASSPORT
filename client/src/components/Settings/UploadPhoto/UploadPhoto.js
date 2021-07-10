import React, { useState } from "react";
import axios from "axios";

const UploadPhoto = ({ username }) => {
  const [profileImg, setProfileImg] = useState({});

  const onFileChange = (e) => {
    setProfileImg({ profileImg: e.target.files[0] });
  };

  const uploadPhoto = (e) => {
    console.log("hit", username);
    e.preventDefault();
    const formData = new FormData();
    formData.append("profileImg", profileImg);
    axios
      .put(`/api/users/${username}`, formData, {})
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="d-flex flex-column my-4">
      <div className="d-flex justify-content-center">
        <form>
          <div className="form-group">
            <input
            type="file"
            id="photo" 
            name="photo"
            accept="image/png, image/jpeg"
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-primary btn-sm p-1"
              onClick={uploadPhoto}
              onChange={onFileChange}
              type="submit"
            >
              Upload
            </button>
            <button className="btn btn-outline-danger btn-sm ml-3 p-1">
              Remove
            </button>
          </div>
        </form>
      </div>
      {/* <span className="image-size">Image format with max size of 3MB</span> */}
    </div>
  );
};

export default UploadPhoto;
