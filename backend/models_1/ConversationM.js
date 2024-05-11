const Sequelize = require("sequelize");
const sequelize = require("../utils/database");
const Messages = require("../models/MessagesM");

const Conversation = sequelize.define("Conversation", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  senderId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  receiverId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
});

// Define many-to-many association between Conversation and User


module.exports = Conversation;
