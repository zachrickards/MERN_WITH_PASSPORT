const express = require("express");
const router = express.Router();
const User = require("../../database/models/User");
const { matchUsers } = require("/match.js");

//getting home endpoint and finding all user data and displaying it by their id
router.get("/", async (req, res) => {
  try {
    const myUser = await User.find({ _id: { $eq: req.user._id } });

    // TODO: filter users based on previous matches
    const userData = await User.find({
      _id: {
        $ne: req.user._id,
      },
    });

    console.log(
      "FILTERED USERS",
      userData.filter((user) => {
        // Check if user exists in my user yes data
        return myUser.yes.findIndex((_id) => _id === user._id) === -1;
      })
    );
    //turning user data to JSON
    res.json(
      userData.filter((user) => {
        // Check if user exists in my user yes data
        return myUser.yes.findIndex((_id) => _id === user._id) === -1;
      })
    );
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

//TODO: update swipe API to add to yes key

//filter users based on previous matches
// function matchUsers() {
//   return (
//     <div>
//       {matchData
//         .filter((matchUsers) => matchUsers.include("users.match"))
//         .map((filteredMatch) => (
//           <li>{filteredMatch}</li>
//         ))}
//     </div>
//   );
// }

//add export default matchUsers? or simply call function at the end?

module.exports = router;
