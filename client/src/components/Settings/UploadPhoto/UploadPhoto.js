import React, { useState } from "react";
import axios from "axios";
import SpinnerEl from "../../Spinner";

const UploadPhoto = ({ username, setReRender, setLoading }) => {
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
    setLoading(true);
    axios
      .post(`/api/images`, formData, {
        headers: {
          "Content-Type": '	application/json; charset=utf-8'
        }
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
        setReRender(true);
      }).catch(err => {
        console.log(err)
      })
  };

  return (
    <div className="d-flex flex-column align-items-center my-4">
      <div className="d-flex">
        <form>
          <div className="form-group" style={{marginLeft: '6rem'}}>
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
            {/* <button className="btn btn-outline-danger btn-sm ml-3 p-1">
              Remove
            </button> */}
          </div>
        </form>
      </div>
      {/* <span className="image-size">Image format with max size of 3MB</span> */}
    </div>
  );
};

export default UploadPhoto;
