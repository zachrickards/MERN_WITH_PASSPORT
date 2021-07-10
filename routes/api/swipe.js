const express = require("express");
const router = express.Router();
const User = require("../../database/models/User");
const Match = require("../../database/models/match");

//getting home endpoint and finding all user data and displaying it by their id
router.get("/", async (req, res) => {
  try {
    const myUser = await User.findOne({ _id: { $eq: req.user._id } });
    // await myUser.execPopulate({ path: "yesSwipes", select: "User" });
    // TODO: filter users based on previous matches
    const userData = await User.find({
      _id: {
        $ne: req.user._id,
      },
    });
    // turning user data to Json

    if (!myUser.yes) return res.json(userData);

    res.json(
      userData.filter((user) => {
        // Check if user exists in my user yes data
        return myUser.yes.findIndex((_id) => {
          console.log(_id, user._id);
          return _id === user._id === -1
        });
      })
    );
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
