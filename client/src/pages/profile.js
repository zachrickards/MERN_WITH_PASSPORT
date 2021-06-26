import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { LOADING, SET_USER } from "../store/actions";
import { useStoreContext } from "../store/store";
import { Image } from "cloudinary-react";
const Profile = () => {
  return (
    <>
      <div class="bg-white">
        <Image
          publicId="ze88x3defkwzubjlhfho"
          width="300"
          crop="scale"
          cloudName="dyvqfdd5w"
        />
      </div>
      <div class="container">
        <div class="d-flex justify-content-between align-items-center py-4">
          <div>
            <a href="#" class="d-inline-block text-dark">
              <strong>234</strong>
              <span class="text-muted">followers</span>
            </a>
            <a href="#" class="d-inline-block text-dark ml-3">
              <strong>111</strong>
              <span class="text-muted">following</span>
            </a>
          </div>
          <div>
            <a href="#" class="btn btn-success btn-sm">
              Follow
            </a>
            <a
              href="#"
              class="btn btn-default icon-btn md-btn-flat btn-sm ml-1"
            >
              <i class="ion ion-md-mail"></i>
            </a>
          </div>
        </div>
      </div>
      <hr class="m-0" />

      <div class="container">
        <div class="text-center py-5">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar6.png"
            alt
            class="ui-w-100 rounded-circle"
          >
            <div class="col-md-8 col-lg-6 col-xl-5 p-0 mx-auto">
              <h4 class="font-weight-bold my-4">Mike Greene</h4>

              <div class="text-muted mb-4">
                Lorem ipsum dolor sit amet, nibh suavitate qualisque ut nam. Ad
                harum primis electram duo, porro principes ei has.
              </div>
            </div>

            <div class="text-center">
              <a
                href="#"
                class="btn icon-btn borderless btn-outline-twitter btn-lg btn-round"
              >
                <span class="ion ion-logo-twitter"></span>
              </a>
              <a
                href="#"
                class="btn icon-btn borderless btn-outline-facebook btn-lg btn-round"
              >
                <span class="ion ion-logo-facebook"></span>
              </a>
              <a
                href="#"
                class="btn icon-btn borderless btn-outline-instagram btn-lg btn-round"
              >
                <span class="ion ion-logo-instagram"></span>
              </a>
            </div>
          </img>
        </div>
      </div>
      <hr class="m-0" />

      <ul class="nav nav-tabs tabs-alt justify-content-center">
        <li class="nav-item">
          <a class="nav-link py-4 active" href="#">
            Posts
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link py-4" href="#">
            Likes
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link py-4" href="#">
            Followers
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link py-4" href="#">
            Following
          </a>
        </li>
      </ul>
    </>
  );
};

export default Profile;
