const { createServer } = require("http");

const { Server } = require("socket.io");

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");
  //   socket.emit("message", "Hello from server");
  socket.on("message", (msg) => {
    console.log(msg);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

httpServer.listen(3002, () => {
  console.log("listening on *:3000");
});
