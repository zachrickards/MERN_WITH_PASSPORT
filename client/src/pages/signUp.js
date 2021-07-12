import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import BG from "../../src/images/home-bg-4.jpg";
import logo from "../../src/images/heart-logo-red.png";
import LogoH1 from '../components/Logo';

const SignUp = () => {
  const history = useHistory();

  const [signUpCreds, setSignUpCreds] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignUpCreds({ ...signUpCreds, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('/api/users/signup', {
        username: signUpCreds.username,
        firstName: signUpCreds.firstName,
        lastName: signUpCreds.lastName,
        email: signUpCreds.email,
        password: signUpCreds.password,
      })
      .then((response) => {
        if (!response.data.error) {
          history.replace('/login');
        } else {
          console.log('USERNAME TAKEN');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="text-center d-flex flex-column align-items-center"
    style={{
      width: "100%",
      height: "100vh",
      // backgroundColor: "var(--alice-blue)"
    }}>
      <div className="mt-5">
      <LogoH1 
        logo={logo}/>
      </div>
      <div style={{width: '350px'}}>
      <form className="form-signin mt-5">
        <label htmlFor="inputUsername" className="sr-only">
          Username
        </label>
        <input
          type="text"
          id="inputUsername"
          className="form-control mb-2"
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
          className="form-control mb-2"
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
          className="form-control mb-2"
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
          className="form-control mb-2"
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
          className="form-control mb-2"
          name="password"
          placeholder="Password"
          value={signUpCreds.password}
          onChange={handleChange}
        />
        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
      <p className="text-white">Already have an account?
      <span><a href="/login" style={{color: 'black'}}> Login</a></span>
</p>
      </div>
    </div>
  );
};

export default SignUp;
