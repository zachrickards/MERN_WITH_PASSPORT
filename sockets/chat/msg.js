module.exports = (io, socket) => {
    socket.on('msg', (id, msg) => {
        console.log("a user disconnected");
        console.log(id, msg);
    })
}