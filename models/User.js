const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");

const User = sequelize.define("User", {
  name: DataTypes.STRING,
  phone: { type: DataTypes.STRING, unique: true },
  email: DataTypes.STRING,
  password: DataTypes.STRING
});

module.exports = User;
