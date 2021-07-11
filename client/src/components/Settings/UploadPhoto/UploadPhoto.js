import React, { useState } from "react";
import axios from "axios";

const UploadPhoto = ({ username, setReRender }) => {
  const [profileImg, setProfileImg] = useState(null);

  const onFileChange = (e) => {
    setProfileImg(e.target.files[0]);
  };

  const uploadPhoto = (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(profileImg)
    formData.append("file", profileImg);
    console.log("formData",formData);
    axios
      .post(`/api/images`, formData, {
        headers: {
          "Content-Type": '	application/json; charset=utf-8'
        }
      })
      .then((res) => {
        console.log(res);
        setReRender(true)
      }).catch(err => {
        console.log(err)
      })
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
            onChange={onFileChange}
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-primary btn-sm p-1"
              onClick={uploadPhoto}
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
