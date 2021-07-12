import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const history = useHistory();

  const [signUpCreds, setSignUpCreds] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignUpCreds({ ...signUpCreds, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/users/signup", {
        username: signUpCreds.username,
        firstName: signUpCreds.firstName,
        lastName: signUpCreds.lastName,
        email: signUpCreds.email,
        password: signUpCreds.password,
      })
      .then((response) => {
        if (!response.data.error) {
          history.replace("/login");
        } else {
          console.log("USERNAME TAKEN");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="text-center">
      <form className="form-signin">
        <label htmlFor="inputUsername" className="sr-only">
          Username
        </label>
        <input
          type="text"
          id="inputUsername"
          className="form-control"
          name="username"
          placeholder="Username"
          value={signUpCreds.username}
          onChange={handleChange}
        />
        <label htmlFor="inputFirstName" className="sr-only">
          First Name
        </label>
        <input
          type="text"
          id="inputfirstName"
          className="form-control"
          name="firstName"
          placeholder="First Name"
          value={signUpCreds.firstName}
          onChange={handleChange}
        />
        <label htmlFor="inputLastName" className="sr-only">
          Last Name
        </label>
        <input
          type="text"
          id="inputLastName"
          className="form-control"
          name="lastName"
          placeholder="Last Name"
          value={signUpCreds.lastName}
          onChange={handleChange}
        />

        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          name="email"
          placeholder="Email address"
          value={signUpCreds.email}
          onChange={handleChange}
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          name="password"
          placeholder="Password"
          value={signUpCreds.password}
          onChange={handleChange}
        />
        <button
          className="btn btn-lg btn-dark btn-block"
          type="submit"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </form>
      <div
        className="d-flex flex-column align-items-center justify-content-around"
        style={{
          width: "100%",
          height: "80vh",
          backgroundImage: `url('https://media.giphy.com/media/KGw8FDgFPZhZAxYkZI/giphy.gif')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h1>Start connecting journey today!</h1>
      </div>
    </div>
  );
};

export default SignUp;
