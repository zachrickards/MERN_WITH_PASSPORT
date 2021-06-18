const express = require('express');
const router = express.Router();

//Check that user is logged in
const isAuth = (req, res, next) => {
    if(!req.user){
        res.send("Please login");
    }
    next();
}


const Message = require("../../database/models/Message");
const passport = require("../../passport");
const messagesController = require("../../controllers/messages");

//TODO: Display all messages to a single user (???MOVE THIS AS A METHOD TO CONTROLLERS ???)
// router.get("/chatId/messageId", isAuth,  (req, res) => {
//     res.send("Here is your Chats list!")
// })

router.get("/chatId/messageId", messagesController.getFakeMessages);

module.exports = router;
