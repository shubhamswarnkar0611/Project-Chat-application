const express = require("express");
const { app, io, server } = require("./socket/socket-io");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./utils/database");
const UsersRouter = require("./routes/UsersR");
const MessagesRouter = require("./routes/MessagesR");
const GroupRouter = require("./routes/GroupR");
const Message = require("./models/MessagesM");
const User = require("./models/UsersM");
const Group = require("./models/GroupM");
const GroupMessage = require("./models/GroupMessagesM");
const GroupMembership = require("./models/GroupMembershipM");

// Middleware
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  })
);
app.use(bodyParser.json());

// Routes
app.use(UsersRouter);
app.use(GroupRouter);
app.use(MessagesRouter);

// User <-> Message (One-to-Many)
User.hasMany(Message, { as: "sentMessages", foreignKey: "senderId" });
User.hasMany(Message, {
  as: "receivedMessages",
  foreignKey: "receiverId",
  onDelete: "CASCADE",
});
Message.belongsTo(User, { as: "Sender", foreignKey: "senderId" });
Message.belongsTo(User, {
  as: "Receiver",
  foreignKey: "receiverId",
  onDelete: "CASCADE",
});

// Group <-> Message (One-to-Many)
User.hasMany(GroupMessage, { as: "sentGroupMessages", foreignKey: "senderId" });
Group.hasMany(GroupMessage, { onDelete: "CASCADE" });
GroupMessage.belongsTo(User, { as: "Sender", foreignKey: "senderId" });
GroupMessage.belongsTo(Group, { onDelete: "CASCADE" });

// User <-> Group (Many-to-Many)

User.belongsToMany(Group, { through: GroupMembership });
Group.belongsToMany(User, { through: GroupMembership });
GroupMembership.belongsTo(Group)

// Database Synchronization
sequelize
  .sync({ force: false }) 
  .then(() => {
    console.log("Database synced successfully");
    server.listen(4000, () => {
      console.log("Server is running on port 4000");
    });
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });
