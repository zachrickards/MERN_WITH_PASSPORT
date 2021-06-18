const db = require("../database/models");
const axios = require("axios");
const { response } = require("express");
const User = require("../database/models/User");

// Defining methods for the usersController
module.exports = {
  findAll: function (req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByUsername: function (req, res) {
    db.User.findOne({ "username" : req.params.username })
      .then((dbModel => res.json(dbModel)))
      .catch((err) => res.status(422).json(err))
  },
  create: function (req, res) {
    db.User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  getFakepeople: function (req, res) {
    axios
      .get("https://randomuser.me/api/?nat=us&results=30")
      .then((response) => {
        console.log(response.data.results);
        res.json(response.data.results);
      });
  },
  createUser: function (req, res) {
    const { 
      username, 
      password, 
      firstName,
      lastName,
      age,
      location,
      gender,
      pronouns,
      sexuality,
      status,
      bio,
      interests,
      yesSwipes,
      noSwipes,
      matches
    } = req.body;

  User.findOne({ username: username }, (err, user) => {
    if (err) {
      console.log("User Create Error: ", err);
      return;
    }

    if (user) {
      res.json({
        error: `There is already a user with the username: ${username}`,
      });
      return;
    }

    const newUser = new User({
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      age: age,
      location: location,
      gender: gender,
      pronouns: pronouns,
      sexuality: sexuality,
      status: status,
      bio: bio,
      interests: interests,
      yesSwipes: yesSwipes,
      noSwipes: noSwipes,
      matches: matches
    });

    newUser.save((err, savedUser) => {
      if (err) return res.json(err);

      res.json(savedUser);
    });
  });
  },
};
