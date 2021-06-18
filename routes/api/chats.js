const express = require('express');
const router = express.Router();

//Check that user is logged in
const isAuth = (req, res, next) => {
    if(!req.user){
        res.send("Please login");
    }
    next();
}


const Chat = require("../../database/models/Chat");
const passport = require("../../passport");
const chatsController = require("../../controllers/chats");

//TODO: Display all chats to a single user (???MOVE THIS AS A METHOD TO CONTROLLERS ???)
// router.get("/loggedInUser/chatId", isAuth,  (req, res) => {
//     res.send("Here is your Chats list!")
// })

router.get("/loggedInUser/chatId", chatsController.getFakeChats);

module.exports = router;
