const router = require('express').Router();
const userRoutes = require('./users');
const chatRoutes = require('./chats');
const messageRoutes = require('./messages');
const images = require("./image");

router.use('/users', userRoutes);
router.use('/chats', chatRoutes);
router.use('/messages', messageRoutes);
router.use('/images', images);

module.exports = router;
