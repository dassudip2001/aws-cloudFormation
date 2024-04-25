const socket = io("http://localhost:3002");

socket.on("connect", () => {
  console.log("connected to server");
  socket.emit("message", "Hello from client");
});

socket.on("message", (msg) => {
  socket.emit("message", "Hello from client");
  console.log(msg);
});
