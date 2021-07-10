import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import { LOADING, SET_USER } from "../../store/actions";
import { useStoreContext } from "../../store/store";
import "./help.css";
import emailjs from "emailjs-com";

const Help = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_upld0n3",
        "template_vyjd6k4",
        e.target,
        "user_VGRqbXjGwdNwwhPNY7iVS"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
  

      <div
        className="container border"
        style={{
          marginTop: "50px",
          width: "50%",
          backgroundImage: `url('https://cdn.pixabay.com/photo/2016/08/23/10/45/network-1614045_960_720.png')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1 style={{ marginTop: "25px" }}>Connect with us</h1>
        <form
          className="row"
          style={{ margin: "25px 85px 75px 100px" }}
          onSubmit={sendEmail}
        >
          <label>Name</label>
          <input type="text" name="name" />

          <label>Email</label>
          <input type="email" name="user_email" className="form-control" />

          <label>Message</label>
          <textarea type="message" rows="4" className="form-control" />
          <input
            type="submit"
            value="Send"
            className="form-control btn btn-secondary"
            style={{ marginTop: "30px" }}
          />
        </form>
      </div>
 
  );
};

{
  /*const Help = (props) => {
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
    e.preventDefault();
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
      setState({ emailError2: email ? false : true });
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
  };

  const {
    name,
    email,
    message,
    contact,
    nameError,
    emailError,
    emailError2,
    messageError,
    formValid,
  } = state;

  return (
    <div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 bg-light ">
      <div className="card-header bg-transparent border-0 text-center text-uppercase">
        <h2>{formValid ? "All Good" : "No valid data"}</h2>
        <h3>{props.title}</h3>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label className="mb-0">
                Your name<span className="text-danger">*</span>
              </label>
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
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
                value={email}
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
                value={contact}
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
                value={message}
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
            <div className="text-center mb-0">
              <div
                type="submit"
                className="btn btn-primary btn-lg w-100 text-uppercase"
                onClick={(event) => handleSubmit(event)}
              >
                Submit Now
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  };*/
}

export default Help;
