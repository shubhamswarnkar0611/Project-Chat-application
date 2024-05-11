const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const GroupMessage = sequelize.define('GroupMessage', {
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

module.exports = GroupMessage;