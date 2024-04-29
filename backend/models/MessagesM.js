const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

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

module.exports = Messages;
