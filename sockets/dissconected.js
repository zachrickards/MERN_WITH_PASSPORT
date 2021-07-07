module.exports = (io, socket) => {
    socket.on('disconnect', () => {
        console.log("a user disconnected");
    })
}