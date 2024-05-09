const express = require('express');
const { app, io, server } = require("./socket/socket-io");
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./utils/database');
const UsersRouter = require("./routes/UsersR");
const MessagesRouter = require("./routes/MessagesR");
const Messages = require("./models/MessagesM");
const Conversation = require("./models/ConversationM");

// Middleware
app.use(cors());
app.use(bodyParser.json()); 

// Routes
app.use(UsersRouter);
app.use(MessagesRouter);

// Define Associations
Messages.hasMany(Conversation);
Conversation.belongsTo(Messages);

// Database Synchronization
sequelize.sync({ force: false }) // Set to true only during development
  .then(() => {
    console.log("Database synced successfully");
    server.listen(4000, () => {
      console.log("Server is running on port 4000");
    });
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });
