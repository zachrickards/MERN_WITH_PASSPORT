import React from "react";
import { useHistory } from "react-router-dom";
import "./home.css";
import { Button } from 'react-bootstrap'

const Home = (props) => {
  const history = useHistory()
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-around"
      style={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url('https://us.123rf.com/450wm/gorgev/gorgev1811/gorgev181100728/112908422-attractive-beautiful-couple-is-holding-hands-outdoors-on-a-sunny-day.jpg?ver=6')`,
        backgroundPosition: "fixed",
        backgroundSize: "cover",
      }}
    >
      <h1>Connect the Dots to True Love...</h1>
      <Button className="px-5 py-3" variant="danger" size="lg" onClick={() => history.push("/swipe")}>Get Started</Button>
      <h2>What are you waiting for?</h2>
    </div>
  );
};

Home.propTypes = {};

export default Home;
