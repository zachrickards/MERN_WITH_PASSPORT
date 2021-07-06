module.exports = (io, socket) => {

    try {
        socket.on("joinManyRooms", (socketRoomNamesArr, cb) => {
            ["afsdfsa-fasdfsa", "asfdas-asfas"]
            socketRoomNamesArr.forEach(roomName => {
                console.log(`joined ${roomName} room`)
                socket.join(roomName)
            });
            cb({
                status: "ok",
                message: "joined all"
            })
        })


    } catch(err) {
        console.log(err);
    }

}