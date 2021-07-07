import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { LOADING, SET_USER } from "../store/actions";
import { useStoreContext } from "../store/store";
import { Image } from "cloudinary-react";

const Profile = () => {
  return (
    <>
     
     
  
     
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-4">
          <div>
            <a href="#" className="d-inline-block text-dark">
              <strong>234</strong>
              <span className="text-muted">followers</span>
            </a>
            <a href="#" className="d-inline-block text-dark ml-3">
              <strong>111</strong>
              <span className="text-muted">following</span>
            </a>
          </div>
          <div>
            <a href="#" className="btn btn-success btn-sm">
              Follow
            </a>
            <a
              href="#"
              className="btn btn-default icon-btn md-btn-flat btn-sm ml-1"
            >
              <i className="ion ion-md-mail"></i>
            </a>
          </div>
        </div>
      </div>
      <hr className="m-0" />

      <div className="container">
        <div className="text-center py-5">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar6.png"
            alt="avatar"
            className="ui-w-100 rounded-circle"
          />
            <div className="col-md-8 col-lg-6 col-xl-5 p-0 mx-auto">
              <h4 className="font-weight-bold my-4">Mike Greene</h4>

              <div className="text-muted mb-4">
              <h4 class="font-13 text-uppercase">About Me :</h4>
                <p class="text-muted font-13 mb-3">
                    Hi! I'm Mike Greene. Lorem ipsum dolor sit amet, nibh suavitate qualisque ut nam. Ad
                harum primis electram duo, porro principes ei has.
                </p>

                <p class="text-muted mb-2 font-13"><strong>Age :</strong> <span class="ml-2 ">30</span></p>

                <p class="text-muted mb-2 font-13"><strong>Location :</strong> <span class="ml-2">NYC</span></p>

                <p class="text-muted mb-2 font-13"><strong>Gender/Pronouns :</strong><span class="ml-2">Male
                        </span></p>

                <p class="text-muted mb-2 font-13"><strong>Sexuality :</strong> <span class="ml-2 ">Love</span></p>

                <p class="text-muted mb-1 font-13"><strong>"Serious" Status :</strong> <span class="ml-2">Looking for a life partner</span></p>
                
                
              </div>
            </div>

            
        </div>
      </div>
      <hr className="m-0" />

      <ul className="nav nav-tabs tabs-alt justify-content-center">
        <li className="nav-item">
          <a className="nav-link py-4 active" href="#">
            Posts
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link py-4" href="#">
            Likes
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link py-4" href="#">
            Followers
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link py-4" href="#">
            Following
          </a>
        </li>
      </ul>
    </>
  );
};

export default Profile;
