const router = require('express').Router();
const userRoutes = require('./users');
const chatRoutes = require('./chats');
const messageRoutes = require('./messages');

router.use('/users', userRoutes);
router.use('/chats', chatRoutes);
router.use('/messages', messageRoutes);

module.exports = router;
