const { Server } = require("socket.io");
const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

const userSocketMap = {};

getReceiverId = (receiverId) => {
  console.log("userSocketMap[]d", receiverId);
  return userSocketMap[receiverId];
};

io.on("connection", (socket) => {
  console.log("user connected", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId !== "undefined") userSocketMap[Number(userId)] = socket.id;

  io.emit("getOnlineUser", Object.keys(userSocketMap));

  // socket.on("typing",(socket) => {
  //   console.log("typing", socket.id);
  //   io.to(socket.id).emit("typing", socket.id)
  // })

  // Use the built-in 'disconnect' event to handle disconnections
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
    if (userId !== "undefined") {
      delete userSocketMap[Number(userId)];
      console.log("updated userSocketMap:", userSocketMap);
      io.emit("getOnlineUser", Object.keys(userSocketMap));
    }
  });
});

module.exports = { app, io, server ,getReceiverId};
