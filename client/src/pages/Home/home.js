import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./home.css";
import { Button } from 'react-bootstrap'
import BG from "../../../src/images/home-bg-4.jpg";
import logo from "../../../src/images/heart-logo-white.png";
import LogoH1 from "../../components/Logo/Logo";
import "./home.css";

const Home = (props) => {
  const history = useHistory()
  
  return (
    <div
      className="d-flex flex-column align-items-center"
      id="bg"
      style={{
        backgroundImage: `url(${BG})`
      }}
    >
      <div className="d-flex flex-column text-center text-white" id="text-container">
      <LogoH1 logo={logo} />
      <h2 id="subheader"> Connect the dots to true love</h2>
      </div>
      <div className="d-flex flex-column text-center align-items-center" style={{position: 'relative', top: '30px'}}>
      <Button className="mb-3 px-5 py-2" variant="danger" size="lg" style={{width: '180px'}} onClick={() => history.push("/signup")}>Sign Up</Button>
      <p className="text-white">Already have an account?
      <span><Link to="/login" style={{color: 'black'}}> Login</Link></span>
</p>
      </div>
      
    </div>
  );
};

Home.propTypes = {};

export default Home;
