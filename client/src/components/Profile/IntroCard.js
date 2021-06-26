import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import EditIcon from "../Settings/Icon/Icon";

const IntroCard = () => {
  const [isEditing, setIsEditing] = useState(false);

  //save function
  //get data from all input areas and make api request to save(PUT)

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>
          {isEditing ? (
            <input
              type="text"
              placeholder="name"
            />
          ) : (
            <div
              style={{
                fontSize: "1.75rem",
                margin: "0px",
                padding: "0px",
              }}
            >
              name
            </div>
          )}
          <EditIcon isEditing={isEditing} setIsEditing={setIsEditing}/>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Card Subtitle
          <input type="text" placeholder="userdata" />
        </Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          <input type="text" placeholder="userdata" />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default IntroCard;
