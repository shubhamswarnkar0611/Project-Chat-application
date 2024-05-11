

const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Message = sequelize.define('Message', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
 

});

module.exports = Message;
