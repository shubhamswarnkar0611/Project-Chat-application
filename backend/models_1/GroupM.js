const Sequelize = require("sequelize");
const sequelize = require("../utils/database");
const User = require("./UsersM");
const Conversation = require("./ConversationM");

const Messages = sequelize.define("Messages", {
  id: {
    type: Sequelize.INTEGER,
    unique: true,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  message: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  
});
Messages.belongsTo(User, { as: "sender", foreignKey: "senderId" });

Conversation.belongsTo(Messages);

module.exports = Messages;