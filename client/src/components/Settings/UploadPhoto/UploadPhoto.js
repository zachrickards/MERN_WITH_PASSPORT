import React, { useState } from 'react';
import axios from 'axios';

const UploadPhoto = ({username}) => {
    // constructor(props) {
    //     super(props);

    //     this.onFileChange = this.onFileChange.bind(this);
    //     this.onSubmit = this.onSubmit.bind(this);

    //     this.state = {
    //         profileImg: ''
    //     }
    // }



    // const onFileChange = (e) => {
    //     this.setState({ profileImg: e.target.files[0] })
    // }
    const [ fileChange, setFileChange ] = useState({ profileImg: e.target.files[0] })

    const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('profileImg', this.state.profileImg)
        axios.put("http://localhost:3000/api/users/${username}", formData, {
        }).then(res => {
            console.log(res)
        })
    }
    
    return (
        <div className="d-flex flex-column my-4">
        <div className="d-flex flex- justify-content-center">
          <button className="btn btn-primary btn-sm buttons">
            Upload new photo
          </button>
          <button className="btn btn-outline-danger buttons btn-sm ml-3">
            Remove
          </button>
        </div>
        <span className="image-size">
          Image format with max size of 3MB
        </span>
      </div>
    )
}

export default UploadPhoto;
