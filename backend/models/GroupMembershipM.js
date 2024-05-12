const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');
const GroupMembership = sequelize.define("GroupMembership", {
    // Additional attributes can be added here, such as role (admin, member, etc.)
  });

module.exports = GroupMembership;