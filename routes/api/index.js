const router = require('express').Router();
const userRoutes = require('./users');
const images = require("./image");
const swipe =require('./swipe');
const match = require("./match");

router.use('/users', userRoutes);
router.use('/images', images);
router.use('/swipes', swipe);
router.use("/match", match);

module.exports = router;
