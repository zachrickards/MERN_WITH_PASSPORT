module.exports = (io, socket) => {
    socket.on('init', (userId) => {
        console.log("init");
        console.log(userId, socket.id);
    })
}