import React, { useState, useEffect } from "react";
import "./tindercard.css";
// import TinderCard from '../react-tinder-card/index'
import TinderCard from "react-tinder-card";
import API from "../../utils/API";
import { useStoreContext } from "../../store/store";
import axios from "axios";

const backupPicture =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2O9ImNZ_q3a8lRllP7m29nEdW4LUHJlZmvA&usqp=CAU";

const db = [
  {
    _id: 1,
    name: "Neo",
    url:
      "https://media.istockphoto.com/photos/sphynx-cat-wearing-sunglasses-with-green-grass-in-background-picture-id97472202?k=6&m=97472202&s=170667a&w=0&h=UgF8jYaW6rozZNdGTnqfi0ZU9Z_CdN_f26w5mhhqsSA=",
  },
  {
    _id: 2,
    name: "Goldie Wagner",
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2O9ImNZ_q3a8lRllP7m29nEdW4LUHJlZmvA&usqp=CAU",
  },
  {
    _id: 3,
    name: "Harry",
    url:
      "https://assets.mydogsname.com/wp-content/uploads/2019/10/funny-dog-halloween-costumes-harry-potter-900x626.jpg",
  },
  {
    _id: 4,
    name: "Ariel",
    url:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1565913993-51DuxaRPXPL.jpg?crop=1xw:1xh;center,top&resize=480:*",
  },
  {
    _id: 5,
    name: "Jack",
    url:
      "https://images-na.ssl-images-amazon.com/images/I/51yL023V6kL._AC_.jpg",
  },
];

export default function TinderCardComponent({ swipes }) {
  const [state, dispatch] = useStoreContext();

  const profileImg = `${state.user.profileImg.url}`;

  //Runs when use swipes card, data does not "exist" before swipre occurs
  const swiped = async (direction, character) => {
    try {
      axios.get("api/match/all/modified", (data) => {
        console.log("axios get data---------", data)
      })
      let userObj = {
        userId: character._id,
        name: `${character.firstName} ${character.lastName}`,
        age: `${character.age}`,
        location: `${character.location}`,
        img: `${character[0].profileImg}`,
        match: false,
      };

      const addMatch = await API.Match.createMatch({
        usersArr: [
          userObj,
          {
            userId: state.user._id,
            name: `${state.user.firstName} ${state.user.lastName}`,
            match: direction === "right" ? true : false,
          },
        ],
      });

      console.log(addMatch);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="cardContainer d-flex justify-content-center">
        {swipes?.map((character) => (
          <TinderCard
            onSwipe={(dir) => swiped(dir, character)}
            className="swipe"
            key={character._id}
          >
            <div
              style={{
                backgroundImage: "url(" + `${character.profileImg.url}` + ")",
              }}
              className="card"
            >
              <div>
              <h3>{`${character.firstName} ${character.lastName}, ${character.age}`}</h3>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
    </>
  );
}
