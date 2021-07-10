let mongoose = require("mongoose");
let db = require("../database/models");
const { use } = require("../routes/api/swipe");

mongoose.connect("mongodb://localhost/connectDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

db.Match.deleteMany({})
  .then(() => db.User.find({}))
  .then((data) => {
    // console.log(data);
    //first we randomly select a user
    let userSelected = Math.floor(Math.random() * data.length);
    // console.log(userSelected);
    //and then we select a random number
    let numberOfMatches = Math.floor(Math.random() * data.length) - 1;
    if (numberOfMatches < 0) {
      numberOfMatches = 1;
    }
    console.log(numberOfMatches);
    //randomized number of matches depending on amount of users
    let matchSeed = [];
    for (let i = 0; i < numberOfMatches; i++) {
      let match = Math.floor(Math.random() * data.length);
      //look up if match is already within the matches
      let idCheck = matchSeed.filter((el) => el._id === data[match]._id);
      while (match === userSelected || idCheck.length > 0) {
        match = Math.floor(Math.random() * data.length);
        idCheck = matchSeed.filter((el) => el._id === data[match]._id);
      }
      console.log(data[match]);
      matchSeed.push({
        userId: data[match]._id,
        name: data[match].firstName + data[match].lastName,
        match: Math.floor(Math.random() * 2),
      });
    }
    // console.log(data[userSelected]);
    console.log(matchSeed);
    db.Match.create({
      userId: data[userSelected]._id,
      users: matchSeed,
      socketRoomName: "YAGA",
    }).then((res) => {
      console.log(res);
      process.exit(0);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

//if user swiped yes
//validation if both Match Ids are actually true

//for the user
//find all users they matched to
//then find matched data for user in array
//if they matched, append to data returned to the front
/**
 * let arrayReturned = []
 * Match.find({userId}).then({
 * for users matched (use filter)
 *    Match.find({userId})
 *    if match is found
 *    append it to array
 *    res.json(arrayReturned)
 *
 * })
 */
