let mongoose = require("mongoose");
let db = require("../database/models");

mongoose.connect("mongodb://localhost/connect", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

let userSeed = [
  {
    username: "Jerry223",
    password: "1234",
    firstName: "Jerry",
    lastName: "Adams",
    age: "43",
    location: "New York City",
    gender: "Male",
    pronouns: ["Him", "He"],
    sexuality: "",
    status: "Ready to commit",
    bio: "I'm a cool guy looking to have fun",
    interests: "Having fun",
    yesSwipes: [],
    noSwipes: [],
    matches: [],
  },
  {
    username: "Martha115",
    password: "5890",
    firstName: "Maddams",
    lastName: "Adams",
    age: "41",
    location: "North Carolina",
    gender: "Female",
    pronouns: ["Her", "She"],
    sexuality: "",
    status: "Ready to commit",
    bio: "I'm a cool girl looking to have fun",
    interests: "Sewing",
    yesSwipes: [],
    noSwipes: [],
    matches: [],
  },
  {
    username: "Rachel890",
    password: "1568",
    firstName: "Rachel",
    lastName: "Smith",
    age: "33",
    location: "Delaware",
    gender: "Female",
    pronouns: ["Her", "She"],
    sexuality: "",
    status: "Ready to commit",
    bio: "I'm a nice gal",
    interests: "Fishing",
    yesSwipes: [],
    noSwipes: [],
    matches: [],
  },
];

// db.Workout.deleteMany({})
//   .then(() => db.Workout.collection.insertMany(workoutSeed))
//   .then((data) => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });
