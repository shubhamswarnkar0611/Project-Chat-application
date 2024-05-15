const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');
const GroupMembership = sequelize.define("GroupMembership", {
    // Additional attributes can be added here, such as role (admin, member, etc.)
    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false // By default, users are not admins
      }
  });

module.exports = GroupMembership;