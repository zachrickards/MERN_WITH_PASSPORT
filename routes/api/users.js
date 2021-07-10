const express = require("express");
const router = express.Router();
const User = require("../../database/models/User");
const passport = require("../../passport");
const usersController = require("../../controllers/users");

//ASK CALEB: How to have the remove function receive a username in the routes, but actually find that user's Id w/i the function
//ASK CALEB: Do we need to add 'withAuth' middleware function to our routes to make sure that the user's being deleted are the users who are logged in?


router.get("/all", usersController.findAll);


router.get("/fakepeople", usersController.getFakepeople);

router.get("/:username", usersController.findByUsername);

router.get("/", async (req, res) => {
  if (req.user) {
    const userData = await User.findById(req.user._id);
    res.json({ user: userData });
  } else {
    res.json({ user: null });
  }
});

router.post(
  "/login",
  (req, res, next) => {
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    console.log("LOGGED IN", req.user);
    res.send(req.user);
  }
  );

  router.post("/logout", (req, res) => {
    if (req.user) {
      req.logout();
      res.status(200).json({ msg: "LOGGED OUT" });
    } else {
      res.status(404).json({ msg: "NO USER TO LOGOUT" });
    }
  });
  
  router.post("/signup", usersController.createUser);
  
  router.post("/:username", usersController.create);
  
  router.put("/:username", usersController.update);
  
  router.delete("/:username/delete", usersController.remove);


module.exports = router;
