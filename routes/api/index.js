const router = require('express').Router();
const user = require('./users.js');
const images = require("./image.js");
const swipe =require('./swipe.js');
const match = require("./match.js");

router.use('/users', user);
router.use('/images', images);
router.use('/swipes', swipe);
router.use("/match", match);

module.exports = router;
