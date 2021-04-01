const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
    cors: {
        origin: "*",
    },
});

io.on("connection", (socket) => {
    socket.on("joinreq", (data) => {
        if (data) {
            console.log(data.username);
            console.log(data.roomcode);

            socket.join(data.roomcode);
        }
    });

    socket.on("newmsg", (newmsg) => {
        console.log("new msg recieved and emitted: " + JSON.stringify(newmsg));
        socket.emit("newmsg", newmsg);
    });
});

io.on("disconnect", () => {
    console.log("a user disconnected");
});

http.listen(8080, () => {
    console.log("Server is up and running on 8080.");
});
