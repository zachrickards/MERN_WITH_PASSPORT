const express = require("express");
const router = express.Router();
const { Match, User } = require("../../database/models/");


// TODO: take a second look
router.get("/all", async (req, res) => {
  try {
    const matchData = await Match.find({
        "users.userId": req.user._id,
        "users.match": {
          $ne: false
        }
    });

    res.json(matchData);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.post("/", async (req, res) => {
  try {


    if(req.body.usersArr[1].match) {
      const userData = await User.findByIdAndUpdate(req.user._id, {
        $push: {
          yes: req.body.usersArr[0].userId
        }
      })
    }


    // TODO: if allready exists don't create
    // find one match where one user.userId is equal to req.user._id
    // and one user.userId is equal to given userId
    const matchData = await Match.findOne({
      "users.userId": req.user._id,
      "users.userId": req.body.usersArr[0].userId
    });

    // ? need to update the user match value
    if (matchData) {
      const updatedMatchData = await Match.updateOne(
        {
          _id: matchData._id,
          "users.userId": req.user._id,
        },
        {
          $set: {
            "users.$.match": req.body.usersArr[1].match,
          },
        }
      );

      return res.json(updatedMatchData);
    }

    const newMatch = new Match({
      users: req.body.usersArr,
      socketRoomName:
        req.body.usersArr[0].userId + "-" + req.body.usersArr[1].userId,
    });

    newMatch.save((err, savedMatch) => {
      if (err) return res.json(err);

      res.json(savedMatch);
    });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

module.exports = router;
