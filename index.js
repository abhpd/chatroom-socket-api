const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
    cors: {
        origin: "*",
    },
});

io.on("connection", (socket) => {
    console.log(socket.id);
});

http.listen(8080, () => {
    console.log("Server is up and running on 8080.");
});
