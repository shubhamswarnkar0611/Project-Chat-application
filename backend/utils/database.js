const Sequelize = require('sequelize');

const sequelize = new Sequelize('chat_app','root','Shubham@123',{dialect:'mysql',host: 'localhost'});

module.exports = sequelize;
 