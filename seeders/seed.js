let mongoose = require("mongoose");
let db = require("../database/models");

mongoose.connect("mongodb://localhost/connect", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

let userSeed = [
  {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    age: "",
    location: "",
    gender: "",
    pronouns: "",
    sexuality: "",
    status: "",
    bio: "",
    interests: "",
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
