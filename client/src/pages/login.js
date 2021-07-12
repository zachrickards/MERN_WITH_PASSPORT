import axios from 'axios';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LOADING, SET_USER } from '../store/actions';
import { useStoreContext } from '../store/store';
import LogoH1 from '../components/Logo';
import logo from "../images/heart-logo-red.png";

const Login = () => {
  const [state , dispatch] = useStoreContext();
  const history = useHistory();

  const [loginCreds, setLoginCreds] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginCreds({ ...loginCreds, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit")
    dispatch({ type: LOADING });
    console.log(loginCreds);
    axios
      .post('/api/users/login', {
        email: loginCreds.email,
        password: loginCreds.password,
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: SET_USER, user: response.data });
          //store user in localStorage so logged in state persists on refresh
          console.log(response.data)
          localStorage.setItem('user', JSON.stringify(response.data));
          history.replace('/');
        }
      })
      .catch((error) => {
        console.log('login error: ');
        console.log(error.message);
      });
  };

  return (
    <div className="text-center d-flex flex-column align-items-center" style={{width: "100%",
    height: "100vh",}}>
      <div className="mt-5">
      <LogoH1 
        logo={logo}/>
      </div>
      
      <div style={{width: '350px'}}>
      <form className="form-signin mt-3">
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control mb-2"
          name="email"
          placeholder="Email Address"
          value={loginCreds.email}
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
          value={loginCreds.password}
          onChange={handleChange}
        />
        <button className="btn btn-lg btn-primary btn-block mt-3" type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
      <p>Don't have an account?
      <span><Link to="/signup" style={{color: 'red'}}> Sign Up</Link></span>
</p>
      </div>
    </div>
  );
};

export default Login;
