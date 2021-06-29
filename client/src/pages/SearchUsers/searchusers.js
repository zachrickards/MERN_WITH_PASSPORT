import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { LOADING, SET_USER } from "../../store/actions";
import { useStoreContext } from "../../store/store";
import "./searchuser.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchUsers = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="sidebar">
            <div class="widget border-0">
              <div class="search">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Search Keywords"
                />
              </div>
            </div>
            <div class="widget border-0">
              <div class="locations">
                <input
                  class="form-control"
                  type="text"
                  placeholder="All Locations"
                />
              </div>
            </div>
            <div class="widget">
              <div class="widget-title widget-collapse">
                <h6>Swipe Date</h6>
                <a
                  class="ml-auto"
                  data-toggle="collapse"
                  href="#dateposted"
                  role="button"
                  aria-expanded="false"
                  aria-controls="dateposted"
                >
                  {" "}
                  <i class="fas fa-chevron-down"></i>{" "}
                </a>
              </div>
              <div class="collapse show" id="dateposted">
                <div class="widget-content">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="dateposted1"
                    />
                    <label class="custom-control-label" for="dateposted1">
                      Last hour
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="dateposted2"
                    />
                    <label class="custom-control-label" for="dateposted2">
                      Last 24 hour
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="dateposted3"
                    />
                    <label class="custom-control-label" for="dateposted3">
                      Last 7 days
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="dateposted4"
                    />
                    <label class="custom-control-label" for="dateposted4">
                      Last 14 days
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="dateposted5"
                    />
                    <label class="custom-control-label" for="dateposted5">
                      Last 30 days
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="widget">
              <div class="widget-title widget-collapse">
                <h6>Location</h6>
                <FontAwesomeIcon icon="map-marker" />
                <a
                  class="ml-auto"
                  data-toggle="collapse"
                  href="#location"
                  role="button"
                  aria-expanded="false"
                  aria-controls="location"
                >
                  {" "}
                  <i class="fas fa-chevron-down"></i>{" "}
                </a>
              </div>
              <div class="collapse show" id="location">
                <div class="widget-content">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="location1"
                    />
                    <label class="custom-control-label" for="location1">
                      North Carolina
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="location2"
                    />
                    <label class="custom-control-label" for="location2">
                      Florida
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="location3"
                    />
                    <label class="custom-control-label" for="location3">
                      Russia
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="location4"
                    />
                    <label class="custom-control-label" for="location4">
                      Hawaii
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="location5"
                    />
                    <label class="custom-control-label" for="location5">
                      Canada
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="widget">
              <div class="widget-title widget-collapse">
                <h6>Dating Status</h6>
                <a
                  class="ml-auto"
                  data-toggle="collapse"
                  href="#datingstatus"
                  role="button"
                  aria-expanded="false"
                  aria-controls="datingstatus"
                >
                  {" "}
                  <i class="fas fa-chevron-down"></i>{" "}
                </a>
              </div>
              <div class="collapse show" id="datingstatus">
                <div class="widget-content">
                  <div class="custom-control custom-checkbox fulltime-job">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="datingstatus1"
                    />
                    <label class="custom-control-label" for="datingstatus1">
                      Just Friends
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox parttime-job">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="datingstatus2"
                    />
                    <label class="custom-control-label" for="datingstatus2">
                      Nothing Serious
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox freelance-job">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="datingstatus3"
                    />
                    <label class="custom-control-label" for="datingstatus3">
                      Casual Dating
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox temporary-job">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="datingstatus4"
                    />
                    <label class="custom-control-label" for="datingstatus4">
                      Serious Committment
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="widget">
              <div class="widget-title widget-collapse">
                <h6>Age Range</h6>
                <a
                  class="ml-auto"
                  data-toggle="collapse"
                  href="#age"
                  role="button"
                  aria-expanded="false"
                  aria-controls="age"
                >
                  {" "}
                  <i class="fas fa-chevron-down"></i>{" "}
                </a>
              </div>
              <div class="collapse show" id="age">
                <div class="widget-content">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="age1"
                    />
                    <label class="custom-control-label" for="age1">
                      19-24
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="age2"
                    />
                    <label class="custom-control-label" for="age2">
                      25-30
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="age3"
                    />
                    <label class="custom-control-label" for="age3">
                      31-35
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="age4"
                    />
                    <label class="custom-control-label" for="age4">
                      36-40
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="age5"
                    />
                    <label class="custom-control-label" for="age5">
                      41-50
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="widget">
              <div class="widget-title widget-collapse">
                <h6>Compatability Percentage</h6>
                <a
                  class="ml-auto"
                  data-toggle="collapse"
                  href="#Compatability"
                  role="button"
                  aria-expanded="false"
                  aria-controls="Compatability"
                >
                  {" "}
                  <i class="fas fa-chevron-down"></i>{" "}
                </a>
              </div>
              <div class="collapse show" id="Compatability">
                <div class="widget-content">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="Compatability1"
                    />
                    <label class="custom-control-label" for="Compatability1">
                      25%-45%
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="Compatability2"
                    />
                    <label class="custom-control-label" for="Compatability2">
                      45%-60%
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="Compatability3"
                    />
                    <label class="custom-control-label" for="Compatability3">
                      60%-75%
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="Compatability4"
                    />
                    <label class="custom-control-label" for="Compatability4">
                      75%-90%
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="Compatability5"
                    />
                    <label class="custom-control-label" for="Compatability5">
                      90%-100%
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="widget">
              <div class="widget-title widget-collapse">
                <h6>Gender</h6>
                <a
                  class="ml-auto"
                  data-toggle="collapse"
                  href="#gender"
                  role="button"
                  aria-expanded="false"
                  aria-controls="gender"
                >
                  <i class="fas fa-chevron-down"></i>
                </a>
              </div>
              <div class="collapse show" id="gender">
                <div class="widget-content">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="gender1"
                    />
                    <label class="custom-control-label" for="gender1">
                      Male
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="gender2"
                    />
                    <label class="custom-control-label" for="gender2">
                      Female
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="gender3"
                    />
                    <label class="custom-control-label" for="gender3">
                      Non-Binary
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="widget border-0">
              <div class="widget-add">
                <img class="img-fluid" src="images/add-banner.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="row mb-4">
            <div class="col-12">
              <h6 class="mb-0">
                Showing 1-10 of <span class="text-primary">28 Matches</span>
              </h6>
            </div>
          </div>
          <div class="job-filter mb-4 d-sm-flex align-items-center">
            <div class="job-shortby ml-sm-auto d-flex align-items-center">
              <form class="form-inline">
                <div class="form-group mb-0">
                  <label class="justify-content-start mr-2">Sort by :</label>
                  <div class="short-by">
                    <select
                      class="form-control basic-select select2-hidden-accessible"
                      data-select2-id="1"
                      tabindex="-1"
                      aria-hidden="true"
                    >
                      <option data-select2-id="3">Newest</option>
                      <option>Oldest</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 col-lg-4 mb-4">
              <div class="match-list match-grid">
                <div class="match-list-image">
                  <img
                    class="img-fluid"
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt=""
                  />
                </div>
                <div class="match-list-details">
                  <div class="match-list-info">
                    <div class="match-list-title">
                      <h5>
                        <a href="match-detail.html">Rafael Briggs, 28</a>
                      </h5>
                    </div>
                    <div class="match-list-option">
                      <ul class="list-unstyled">
                        <li>Pronouns: They/Them</li>
                        <li>
                        <FontAwesomeIcon icon="map-marker" /> Location:
                          Haines City, FL 33844
                        </li>
                        <li id="bio">
                          Interests: I love long walks on the beach
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="match-list-favourite-time">
                    <a class="match-list-favourite order-2" href="#">
                      <FontAwesomeIcon icon="heart" />
                    </a>
                    <span class="match-list-time order-1">
                      <i class="far fa-clock pr-1"></i>1M ago
                      <div
                        class="d-grid gap-2"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button type="button" class="btn btn-primary">
                          Let's Connect
                        </button>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 mb-4">
              <div class="match-list match-grid">
                <div class="match-list-image">
                  <img
                    class="img-fluid"
                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                    alt=""
                  />
                </div>
                <div class="match-list-details">
                  <div class="match-list-info">
                    <div class="match-list-title">
                      <h5>
                        <a href="match-detail.html">Rafael Briggs</a>
                      </h5>
                    </div>
                    <div class="match-list-option">
                      <ul class="list-unstyled">
                        <li>Pronouns: They/Them</li>
                        <li>
                        <FontAwesomeIcon icon="map-marker" />Location:
                          Haines City, FL 33844
                        </li>
                        <li id="bio">
                          Interests: I love long walks on the beach
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="match-list-favourite-time">
                    <a class="match-list-favourite order-2" href="#">
                      <FontAwesomeIcon icon="heart" />
                    </a>
                    <span class="match-list-time order-1">
                      <i class="far fa-clock pr-1"></i>1M ago
                      <button type="button" class="btn btn-primary">
                          Let's Connect
                        </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 mb-4">
              <div class="match-list match-grid">
                <div class="match-list-image">
                  <img
                    class="img-fluid"
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    alt=""
                  />
                </div>
                <div class="match-list-details">
                  <div class="match-list-info">
                    <div class="match-list-title">
                      <h5>
                        <a href="match-detail.html">Rafael Briggs</a>
                      </h5>
                    </div>
                    <div class="match-list-option">
                      <ul class="list-unstyled">
                        <li>Pronouns: They/Them</li>
                        <li>
                        <FontAwesomeIcon icon="map-marker" /> Location:
                          Haines City, FL 33844
                        </li>
                        <li id="bio">
                          Interests: I love long walks on the beach
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="match-list-favourite-time">
                    <a class="match-list-favourite order-2" href="#">
                      <FontAwesomeIcon icon="heart" />
                    </a>
                    <span class="match-list-time order-1">
                      <i class="far fa-clock pr-1"></i>1M ago
                      <button type="button" class="btn btn-primary">
                          Let's Connect
                        </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 mb-4">
              <div class="match-list match-grid">
                <div class="match-list-image">
                  <img
                    class="img-fluid"
                    src="https://bootdey.com/img/Content/avatar/avatar4.png"
                    alt=""
                  />
                </div>
                <div class="match-list-details">
                  <div class="match-list-info">
                    <div class="match-list-title">
                      <h5>
                        <a href="match-detail.html">Rafael Briggs</a>
                      </h5>
                    </div>
                    <div class="match-list-option">
                      <ul class="list-unstyled">
                        <li>Pronouns: They/Them</li>
                        <li>
                        <FontAwesomeIcon icon="map-marker" /> Location:
                          Haines City, FL 33844
                        </li>
                        <li id="bio">
                          Interests: I love long walks on the beach
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="match-list-favourite-time">
                    <a class="match-list-favourite order-2" href="#">
                      <FontAwesomeIcon icon="heart" />
                    </a>
                    <span class="match-list-time order-1">
                      <i class="far fa-clock pr-1"></i>6D ago
                      <button type="button" class="btn btn-primary">
                          Let's Connect
                        </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 mb-4">
              <div class="match-list match-grid">
                <div class="match-list-image">
                  <img
                    class="img-fluid"
                    src="https://bootdey.com/img/Content/avatar/avatar5.png"
                    alt=""
                  />
                </div>
                <div class="match-list-details">
                  <div class="match-list-info">
                    <div class="match-list-title">
                      <h5>
                        <a href="match-detail.html">Rafael Briggs</a>
                      </h5>
                    </div>
                    <div class="match-list-option">
                      <ul class="list-unstyled">
                        <li>Pronouns: They/Them</li>
                        <li>
                        <FontAwesomeIcon icon="map-marker" />  Location:
                          Haines City, FL 33844
                        </li>
                        <li id="bio">
                          Interests: I love long walks on the beach
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="match-list-favourite-time">
                    <a class="match-list-favourite order-2" href="#">
                      <FontAwesomeIcon icon="heart" />
                    </a>
                    <span class="match-list-time order-1">
                      <i class="far fa-clock pr-1"></i>1M ago
                      <button type="button" class="btn btn-primary">
                          Let's Connect
                        </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 mb-4">
              <div class="match-list match-grid">
                <div class="match-list-image">
                  <img
                    class="img-fluid"
                    src="https://bootdey.com/img/Content/avatar/avatar6.png"
                    alt=""
                  />
                </div>
                <div class="match-list-details">
                  <div class="match-list-info">
                    <div class="match-list-title">
                      <h5>
                        <a href="match-detail.html">Rafael Briggs</a>
                      </h5>
                    </div>
                    <div class="match-list-option">
                      <ul class="list-unstyled">
                        <li>Pronouns: They/Them</li>
                        <li>
                        <FontAwesomeIcon icon="map-marker" />  Location:
                          Haines City, FL 33844
                        </li>
                        <li id="bio">
                          Interests: I love long walks on the beach
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="match-list-favourite-time">
                    <a class="match-list-favourite order-2" href="#">
                      <FontAwesomeIcon icon="heart" />
                    </a>
                    <span class="match-list-time order-1">
                      <i class="far fa-clock pr-1"></i>1M ago
                      <button type="button" class="btn btn-primary">
                          Let's Connect
                        </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 mb-4">
              <div class="match-list match-grid">
                <div class="match-list-image">
                  <img
                    class="img-fluid"
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt=""
                  />
                </div>
                <div class="match-list-details">
                  <div class="match-list-info">
                    <div class="match-list-title">
                      <h5>
                        <a href="match-detail.html">Rafael Briggs</a>
                      </h5>
                    </div>
                    <div class="match-list-option">
                      <ul class="list-unstyled">
                        <li>Pronouns: They/Them</li>
                        <li>
                        <FontAwesomeIcon icon="map-marker" />  Location:
                          Haines City, FL 33844
                        </li>
                        <li id="bio">
                          Interests: I love long walks on the beach
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="match-list-favourite-time">
                    <a class="match-list-favourite order-2" href="#">
                      <FontAwesomeIcon icon="heart" />
                    </a>
                    <span class="match-list-time order-1">
                      <i class="far fa-clock pr-1"></i>1M ago
                      <button type="button" class="btn btn-primary">
                          Let's Connect
                        </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 mb-4">
              <div class="match-list match-grid">
                <div class="match-list-image">
                  <img
                    class="img-fluid"
                    src="https://bootdey.com/img/Content/avatar/avatar8.png"
                    alt=""
                  />
                </div>
                <div class="match-list-details">
                  <div class="match-list-info">
                    <div class="match-list-title">
                      <h5>
                        <a href="match-detail.html">Rafael Briggs</a>
                      </h5>
                    </div>
                    <div class="match-list-option">
                      <ul class="list-unstyled">
                        <li>Pronouns: They/Them</li>
                        <li>
                        <FontAwesomeIcon icon="map-marker" />  Location:
                          Haines City, FL 33844
                        </li>
                        <li id="bio">
                          Interests: I love long walks on the beach
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="match-list-favourite-time">
                    <a class="match-list-favourite order-2" href="#">
                      <FontAwesomeIcon icon="heart" />
                    </a>
                    <span class="match-list-time order-1">
                      <i class="far fa-clock pr-1"></i>3M ago
                      <button type="button" class="btn btn-primary">
                          Let's Connect
                        </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 mb-4 mb-md-0">
              <div class="match-list match-grid">
                <div class="match-list-image">
                  <img
                    class="img-fluid"
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt=""
                  />
                </div>
                <div class="match-list-details">
                  <div class="match-list-info">
                    <div class="match-list-title">
                      <h5>
                        <a href="match-detail.html">Rafael Briggs</a>
                      </h5>
                    </div>
                    <div class="match-list-option">
                      <ul class="list-unstyled">
                        <li>Pronouns: They/Them</li>
                        <li>
                          {/* need help with correct icons */}
                          <FontAwesomeIcon icon="map-marker" />
                          Location: Haines City, FL 33844
                        </li>
                        <li id="bio">
                          Interests: I love long walks on the beach
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="match-list-favourite-time">
                    <a class="match-list-favourite order-2" href="#">
                      <FontAwesomeIcon icon="heart" />
                    </a>
                    <span class="match-list-time order-1">
                      <i class="far fa-clock pr-1"></i>1M ago
                      <button type="button" class="btn btn-primary">
                          Let's Connect
                        </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 text-center mt-4 mt-sm-5">
              <ul class="pagination justify-content-center mb-0">
                <li class="page-item disabled">
                  {" "}
                  <span class="page-link">Prev</span>{" "}
                </li>
                <li class="page-item active" aria-current="page">
                  <span class="page-link">1 </span>{" "}
                  <span class="sr-only">(current)</span>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    ...
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    25
                  </a>
                </li>
                <li class="page-item">
                  {" "}
                  <a class="page-link" href="#">
                    Next
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchUsers;
