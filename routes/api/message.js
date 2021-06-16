const express = require('express');
const router = express.Router();

const isAuth = (req, res, next) => {
    if(!req.user){
        res.send("Please login");
    }
    next();
}

router.get("/chatList", isAuth,  (req, res) => {
    res.send("Here is your Chats list!")
})


module.exports = router;
