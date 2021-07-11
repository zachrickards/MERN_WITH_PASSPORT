import React from "react";
import Spinner from "react-bootstrap/Spinner";

const SpinnerEl = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default SpinnerEl;
