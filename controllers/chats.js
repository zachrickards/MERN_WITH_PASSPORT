const db = require("../database/models");
const axios = require("axios");
const { response } = require("express");

// Defining methods for the chatsController
module.exports = {
  findAll: function (req, res) {
    db.Chat.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Chat.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Chat.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Chat.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Chat.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  getFakeChats: function (req, res) {
    axios
      .get("https://randomuser.me/api/?nat=us&results=30")
      .then((response) => {
        console.log(response.data.results);
        res.json(response.data.results);
      });
  },
};
