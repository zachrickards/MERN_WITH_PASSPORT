const express = require('express');
const router = express.Router();

//Check that user is logged in
const isAuth = (req, res, next) => {
    if(!req.user){
        res.send("Please login");
    }
    next();
}


const Chat = require("../../database/models/chat");
const passport = require("../../passport");
const chatsController = require("../../controllers/chats");

//Display all messages to a single user
// router.get("/loggedInUser/chatId", isAuth,  (req, res) => {
//     res.send("Here is your Chats list!")
// })

router.get("/loggedInUser/chatId", chatsController.getFakeChats);

module.exports = router;
