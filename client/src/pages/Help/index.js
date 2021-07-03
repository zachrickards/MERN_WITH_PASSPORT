import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { LOADING, SET_USER } from '../../store/actions';
import { useStoreContext } from '../../store/store';
import "./help.css";

const Help = (props) => {
  const [state, setState] = React.useState({
    name: "",
    nameError: false,
    contact: "",
    email: "",
    emailError: false,
    emailError2: false,
    message: "",
    messageError: false,
    formValid: false,
  });

  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  };

  // isValidcontact(contactno) {
  //   return /^[6-9]\d{9}$/.test(contactno);
  // }

  const handleBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setState({ [name]: value });

    if (value.length <= 0 && name == "name") {
      setState({ nameError: true });
    } else {
      setState({ nameError: false });
    }

    if (value.length <= 0 && name == "email") {
      setState({ emailError: true });
      setState({ emailError2: false });
    } else {
      setState({ emailError: false });
      if (isValidEmail(value)) {
        setState({ emailError2: false });
      } else {
        setState({ emailError2: true });
      }
    }
  };

  const handleChange = (e) => {
    setState({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    const {
      name,
      email,
      message,
      nameError,
      emailError,
      emailError2,
      messageError,
    } = state;

    setState({ nameError: name ? false : true });
    setState({ messageError: message ? false : true });
    setState({ emailError: email ? false : true });
    if (email && !emailError) {
      setState({ emailError2: isValidEmail(email) ? false : true });
    }

    if (
      name &&
      email &&
      message &&
      !nameError &&
      !emailError &&
      !emailError2 &&
      !messageError
    ) {
      setState({ formValid: true });
    } else {
      setState({ formValid: false });
    }

    e.preventDefault();
  };

  const {
    name,
    email,
    message,
    nameError,
    emailError,
    emailError2,
    messageError,
    formValid,
  } = state;

  return (
    <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light ">
      <div className="card-header bg-transparent border-0 text-center text-uppercase">
        <h3>{props.title}</h3>
        <div className="card-body">
          <form
            action="/"
            onSubmit={(e) => handleSubmit(e)}
            encType="multipart/form-data"
            autoComplete="off"
          >
            <div className="form-group">
              <label className="mb-0">
                Your name<span className="text-danger">*</span>
              </label>
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Name"
                value={state.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {nameError ? (
                <div className="alert alert-danger mt-2">
                  Name is a required field.
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label className="mb-0">
                Your email<span className="text-danger">*</span>
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Email"
                value={state.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {emailError ? (
                <div className="alert alert-danger mt-2">
                  Email is a required field.
                </div>
              ) : (
                ""
              )}
              {emailError2 ? (
                <div className="alert alert-danger mt-2">Email invalid.</div>
              ) : (
                ""
              )}
            </div>
            <div className="form-group">
              <label className="mb-0">Your contact number (Optional)</label>
              <input
                name="contact"
                type="text"
                className="form-control"
                placeholder="Contact"
                onChange={handleChange}
                value={state.contact}
              />
            </div>
            <div className="form-group">
              <label className="mb-0">
                Message<span className="text-danger">*</span>
              </label>
              <textarea
                name="message"
                type="text"
                className="form-control"
                placeholder="Message"
                value={state.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {messageError ? (
                <div className="alert alert-danger mt-2">
                  Message is a required field.
                </div>
              ) : (
                ""
              )}
            </div>
            <p className="text-center mb-0">
              <input
                type="submit"
                className="btn btn-primary btn-lg w-100 text-uppercase"
                value="Submit Now"
              />
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Help;
