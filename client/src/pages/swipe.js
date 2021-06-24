import React from 'react';
import TinderCardComponent from '../components/TinderCard/tindercard';
import { Container, Row, Col } from 'react-bootstrap';

const Swipe = () => {


  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <TinderCardComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default Swipe;