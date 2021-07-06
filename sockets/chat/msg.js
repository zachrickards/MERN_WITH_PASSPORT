module.exports = (io, socket) => {
    socket.on('clientMsg', (socketRoomName, msgObj, cb) => {
        try {
            socket.to(socketRoomName).emit("serverMsg", msgObj);
    
            cb({
                status: "ok",
            })

        } catch (err) {
            console.log(err);
            cb({
                status: "error",
                message: err.message
            })
        }
    })
}