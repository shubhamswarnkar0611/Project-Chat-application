const Sequelize = require("sequelize");
const User = process.env.DB_USER;
const Password = process.env.DB_PASSWORD;
const Schema = process.env.SCHEMA_NAME;
const Host = process.env.HOST_NAME;

console.log("Starting",User,Password,Schema,Host);


const sequelize = new Sequelize(Schema, User, Password, {
  dialect: "mysql",
  host: Host,
});

module.exports = sequelize;
