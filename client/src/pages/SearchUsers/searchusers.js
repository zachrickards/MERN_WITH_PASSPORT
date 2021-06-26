import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { LOADING, SET_USER } from "../../store/actions";
import { useStoreContext } from "../../store/store";
import "./searchuser.css";


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
                <a
                  class="ml-auto"
                  data-toggle="collapse"
                  href="#specialism"
                  role="button"
                  aria-expanded="false"
                  aria-controls="specialism"
                >
                  {" "}
                  <i class="fas fa-chevron-down"></i>{" "}
                </a>
              </div>
              <div class="collapse show" id="specialism">
                <div class="widget-content">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="specialism1"
                    />
                    <label class="custom-control-label" for="specialism1">
                      North Carolina
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="specialism2"
                    />
                    <label class="custom-control-label" for="specialism2">
                      Florida
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="specialism3"
                    />
                    <label class="custom-control-label" for="specialism3">
                      Russia
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="specialism4"
                    />
                    <label class="custom-control-label" for="specialism4">
                      Hawaii
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="specialism5"
                    />
                    <label class="custom-control-label" for="specialism5">
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
                  href="#jobtype"
                  role="button"
                  aria-expanded="false"
                  aria-controls="jobtype"
                >
                  {" "}
                  <i class="fas fa-chevron-down"></i>{" "}
                </a>
              </div>
              <div class="collapse show" id="jobtype">
                <div class="widget-content">
                  <div class="custom-control custom-checkbox fulltime-job">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="jobtype1"
                    />
                    <label class="custom-control-label" for="jobtype1">
                      Just Friends
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox parttime-job">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="jobtype2"
                    />
                    <label class="custom-control-label" for="jobtype2">
                      Nothing Serious
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox freelance-job">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="jobtype3"
                    />
                    <label class="custom-control-label" for="jobtype3">
                      Casual Dating
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox temporary-job">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="jobtype4"
                    />
                    <label class="custom-control-label" for="jobtype4">
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
                  href="#experience"
                  role="button"
                  aria-expanded="false"
                  aria-controls="experience"
                >
                  {" "}
                  <i class="fas fa-chevron-down"></i>{" "}
                </a>
              </div>
              <div class="collapse show" id="experience">
                <div class="widget-content">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="experience1"
                    />
                    <label class="custom-control-label" for="experience1">
                      19-24
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="experience2"
                    />
                    <label class="custom-control-label" for="experience2">
                      25-30
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="experience3"
                    />
                    <label class="custom-control-label" for="experience3">
                      31-35
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="experience4"
                    />
                    <label class="custom-control-label" for="experience4">
                      36-40
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="experience5"
                    />
                    <label class="custom-control-label" for="experience5">
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
                        <a href="match-detail.html">Rafael Briggs</a>
                      </h5>
                    </div>
                    <div class="match-list-option">
                      <ul class="list-unstyled">
                        <li>
                          Pronouns: They/Them
                        </li>
                        <li>
                          <i class="fas fa-map-marker-alt pr-1"></i>Location: Haines City,
                          FL 33844
                        </li>
                        <li id='bio'>
                          Interests: I love long walks on the beach
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="match-list-favourite-time">
                    <a class="match-list-favourite order-2" href="#">
                      <i class="far fa-heart"></i>
                    </a>
                    <span class="match-list-time order-1">
                      <i class="far fa-clock pr-1"></i>1M ago
                      <button>Lets Connect</button>
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
                        <li>
                          Pronouns: They/Them
                        </li>
                        <li>
                          <i class="fas fa-map-marker-alt pr-1"></i>Location: Haines City,
                          FL 33844
                        </li>
                        <li id='bio'>
                          Interests: I love long walks on the beach
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="match-list-favourite-time">
                    <a class="match-list-favourite order-2" href="#">
                      <i class="far fa-heart"></i>
                    </a>
                    <span class="match-list-time order-1">
                      <i class="far fa-clock pr-1"></i>1M ago
                      <button>Lets Connect</button>
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
                        <li>
                          Pronouns: They/Them
                        </li>
                        <li>
                          <i class="fas fa-map-marker-alt pr-1"></i>Location: Haines City,
                          FL 33844
                        </li>
                        <li id='bio'>
                          Interests: I love long walks on the beach
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="match-list-favourite-time">
                    <a class="match-list-favourite order-2" href="#">
                      <i class="far fa-heart"></i>
                    </a>
                    <span class="match-list-time order-1">
                      <i class="far fa-clock pr-1"></i>1M ago
                      <button>Lets Connect</button>
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
                        <li>
                          Pronouns: They/Them
                        </li>
                        <li>
                          <i class="fas fa-map-marker-alt pr-1"></i>Location: Haines City,
                          FL 33844
                        </li>
                        <li id='bio'>
                          Interests: I love long walks on the beach
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="match-list-favourite-time">
                    <a class="match-list-favourite order-2" href="#">
                      <i class="far fa-heart"></i>
                    </a>
                    <span class="match-list-time order-1">
                      <i class="far fa-clock pr-1"></i>6D ago
                      <button>Lets Connect</button>
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
                        <li>
                          Pronouns: They/Them
                        </li>
                        <li>
                          <i class="fas fa-map-marker-alt pr-1"></i>Location: Haines City,
                          FL 33844
                        </li>
                        <li id='bio'>
                          Interests: I love long walks on the beach
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="match-list-favourite-time">
                    <a class="match-list-favourite order-2" href="#">
                      <i class="far fa-heart"></i>
                    </a>
                    <span class="match-list-time order-1">
                      <i class="far fa-clock pr-1"></i>1M ago
                      <button>Lets Connect</button>
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
                        <li>
                          Pronouns: They/Them
                        </li>
                        <li>
                          <i class="fas fa-map-marker-alt pr-1"></i>Location: Haines City,
                          FL 33844
                        </li>
                        <li id='bio'>
                          Interests: I love long walks on the beach
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="match-list-favourite-time">
                    <a class="match-list-favourite order-2" href="#">
                      <i class="far fa-heart"></i>
                    </a>
                    <span class="match-list-time order-1">
                      <i class="far fa-clock pr-1"></i>1M ago
                      <button>Lets Connect</button>
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
                        <li>
                          Pronouns: They/Them
                        </li>
                        <li>
                          <i class="fas fa-map-marker-alt pr-1"></i>Location: Haines City,
                          FL 33844
                        </li>
                        <li id='bio'>
                          Interests: I love long walks on the beach
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="match-list-favourite-time">
                    <a class="match-list-favourite order-2" href="#">
                      <i class="far fa-heart"></i>
                    </a>
                    <span class="match-list-time order-1">
                      <i class="far fa-clock pr-1"></i>1M ago
                      <button>Lets Connect</button>
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
                        <li>
                          Pronouns: They/Them
                        </li>
                        <li>
                          <i class="fas fa-map-marker-alt pr-1"></i>Location: Haines City,
                          FL 33844
                        </li>
                        <li id='bio'>
                          Interests: I love long walks on the beach
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="match-list-favourite-time">
                    <a class="match-list-favourite order-2" href="#">
                      <i class="far fa-heart"></i>
                    </a>
                    <span class="match-list-time order-1">
                      <i class="far fa-clock pr-1"></i>3M ago
                      <button>Lets Connect</button>
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
                        <li>
                          Pronouns: They/Them
                        </li>
                        <li>
                          <i class="fas fa-map-marker-alt pr-1"></i>Location: Haines City,
                          FL 33844
                        </li>
                        <li id='bio'>
                          Interests: I love long walks on the beach
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="match-list-favourite-time">
                    <a class="match-list-favourite order-2" href="#">
                      <i class="far fa-heart"></i>
                    </a>
                    <span class="match-list-time order-1">
                      <i class="far fa-clock pr-1"></i>1M ago
                      <button>Lets Connect</button>
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
