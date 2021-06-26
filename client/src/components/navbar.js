import axios from "axios";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { LOADING, UNSET_USER } from "../store/actions";
import { useStoreContext } from "../store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [state, dispatch] = useStoreContext();
  const history = useHistory();

  const logout = (event) => {
    event.preventDefault();

    dispatch({ type: LOADING });

    axios
      .post("/api/users/logout")
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: UNSET_USER });
          history.replace("/login");
        }
      })
      .catch((error) => {
        console.log("Logout error");
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {state.user ? (
          <>
            <Link to="/" className="btn btn-link text-secondary">
              <span className="text-secondary">Home</span>
            </Link>
            <div className="container justify-content-end">
              <Link to="/matches" className="btn btn-link">
                <span className="text-secondary">
                  <FontAwesomeIcon icon="heart" />
                </span>
              </Link>
              <Link to="/inbox" className="btn btn-link">
                <span className="text-secondary">
                  <FontAwesomeIcon icon="envelope" />
                </span>
              </Link>
            </div>
          </>
        ) : (
          <></>
        )}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          {state.user ? (
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Find A Match
                </span>
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                  <li><Link to="/swipe" className="dropdown-item">Swipe</Link></li>
                  <li><Link to="/searchusers" className="dropdown-item">Browse</Link></li>
                </ul>
            </li>

              <li className="nav-item active">
                <Link to="/settings" className="btn btn-link">
                  <span className="text-secondary">Settings</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/help" className="btn btn-link">
                  <span className="text-secondary">Help</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  to="#"
                  className="btn btn-link text-secondary"
                  onClick={logout}
                >
                  <span className="text-secondary">Logout</span>
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/login" className="btn btn-link text-secondary">
                  <span className="text-secondary">Login</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/signup" className="btn btn-link">
                  <span className="text-secondary">Sign up</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/help" className="btn btn-link">
                  <span className="text-secondary">Help</span>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
