import React, { useState, useEffect } from "react";
import TinderCardComponent from "../components/TinderCard/tindercard";
import { Container, Row, Col } from "react-bootstrap";
import API from "../utils/API";
import Header from "../components/TinderCard/header.js";
const Swipe = () => {
  const [swipes, setSwipes] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all swipes and store them with swipeCards
  useEffect(() => {
    swipeCards();
  }, []);

  // Loads all swipes and sets them to API
  function swipeCards() {
    API.Swipe.getSwipe()
      .then((res) => {
        console.log(res);
        setSwipes(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Header></Header>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <TinderCardComponent swipes={swipes} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

//populate the sample data
//grab users from our database and display it
//style page
//write API REQUEST IN ROUTES THAT PULLS IN INFO

export default Swipe;
