import React from "react";
import { useHistory } from "react-router-dom";
import "./home.css";
import { Button } from 'react-bootstrap'
import BG from "../../../src/images/home-bg-4.jpg";
import logo from "../../../src/images/heart-logo-white.png"

const Home = (props) => {
  const history = useHistory()
  
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${BG})`,
        backgroundPosition: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="d-flex flex-column text-center text-white" style={{marginTop: '4rem'}}>
      <h1 style={{fontFamily: 'Damion', fontSize: '90px', textShadow: `2px 4px 8px rgba(0,0,0,0.8)`}}>.connect({<span><img src={logo} style={{width: '75px', position: 'relative', top:'-21px', left: '8px'}} /></span>})</h1>
      <h2 className="mb-5" style={{fontFamily: 'Raleway, sans-serif', fontSize: '23px', textShadow: `2px 4px 8px rgba(0,0,0,1)`, position: 'relative', top: '-10px'}}>Connect the dots to true love</h2>
      </div>
      <div className="d-flex flex-column text-center align-items-center" style={{position: 'relative', top: '30px'}}>
      <Button className="mb-3 px-5 py-2" variant="danger" size="lg" style={{width: '180px'}} onClick={() => history.push("/swipe")}>Sign Up</Button>
      <p className="text-white">Already have an account?
      <span><a href="/login" style={{color: 'black'}}> Login</a></span>
</p>
      </div>
      
    </div>
  );
};

Home.propTypes = {};

export default Home;
