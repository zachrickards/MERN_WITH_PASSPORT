import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { LOADING, SET_USER } from "../store/actions";
import { useStoreContext } from "../store/store";
import styled, { css } from "styled-components";

const Login = () => {
  const [state, dispatch] = useStoreContext();
  const history = useHistory();

  const [loginCreds, setLoginCreds] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginCreds({ ...loginCreds, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    dispatch({ type: LOADING });
    console.log(loginCreds);
    axios
      .post("/api/users/login", {
        email: loginCreds.email,
        password: loginCreds.password,
      })
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: SET_USER, user: response.data });
          //store user in localStorage so logged in state persists on refresh
          console.log(response.data);
          localStorage.setItem("user", JSON.stringify(response.data));
          history.replace("/");
        }
      })
      .catch((error) => {
        console.log("login error: ");
        console.log(error.message);
      });
  };

  return (
    <Container>
      <ImageStackStack>
        <ImageStack>
          <Image
            src={require("../../src/assets/Colorful_heart.png")}
          ></Image>
        </ImageStack>
        <Connect>Connect the dots to true love. . .</Connect>
      </ImageStackStack>

      <div className="text-center">
        <h4>Login</h4>
        <form className="form-signin">
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            name="email"
            placeholder="Email address"
            value={loginCreds.email}
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
            value={loginCreds.password}
            onChange={handleChange}
          />
          <button
            className="btn btn-lg btn-dark btn-block"
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  background-color: rgba(11, 11, 11, 0);
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`;

const Image = styled.img`
  left: 100px;
  right: 50px;
  width: 910px;
  height: 690px;
  position: absolute;
  top: 0px;
  object-fit: contain;
  margin-left: auto;
  margin-right: auto;
`;

const ImageStack = styled.div`
  top: 0px;
  left: 0px;
  width: 1326px;
  height: 762px;
  position: absolute;
`;

const Connect = styled.span`
  font-family: Alex Brush;
  position: absolute;
  font-style: normal;
  font-weight: 200;
  color: #121212;
  width: 562px;
  font-size: 43px;
  left: 100;
  bottom: 10px;
  height: 58px;
`;

const ImageStackStack = styled.div`
  width: 1326px;
  height: 762px;
  margin-left: 190px;
  position: relative;
`;

export default Login;
