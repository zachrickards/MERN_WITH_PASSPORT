import axios from "axios";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { LOADING, UNSET_USER } from "../store/actions";
import { useStoreContext } from "../store/store";

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
      <Link to="/" className="btn btn-link text-secondary">
        <span className="text-secondary">Home</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {state.user ? (
            <li className="nav-item active">
              <Link
                to="#"
                className="btn btn-link text-secondary"
                onClick={logout}
              >
                <span className="text-secondary">Logout</span>
              </Link>
              <Link to="/settings" className="btn btn-link">
                <span className="text-secondary">Settings</span>
              </Link>
              <Link to="/searchusers" className="btn btn-link">
                <span className="text-secondary">Search Users</span>
              </Link>
              <Link to="/swipe" className="btn btn-link">
                <span className="text-secondary">Find A Match</span>
              </Link>
              <Link to="/inbox" className="btn btn-link">
                <span className="text-secondary">Messages</span>
              </Link>
              <Link to="/help" className="btn btn-link">
                <span className="text-secondary">Help</span>
              </Link>
            </li>
          ) : (
            <>
              <li className="nav-item active">
                <Link to="/login" className="btn btn-link text-secondary">
                  <span className="text-secondary">Login</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="/signup" className="btn btn-link">
                  <span className="text-secondary">Sign up</span>
                </Link>
                <Link to="/help" className="btn btn-link">
                  <span className="text-secondary">Help</span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
