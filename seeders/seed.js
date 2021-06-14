let mongoose = require("mongoose");
let db = require("../database/models");

mongoose.connect("mongodb://localhost/connect", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

let userSeed = [
  {
    username: "Jerry",
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
    yesSwipes: "",
    noSwipes: "",
    matches: "",
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
