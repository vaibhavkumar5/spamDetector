const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");
const User = require("./User");

const Contact = sequelize.define("Contact", {
  name: DataTypes.STRING,
  phone: DataTypes.STRING
});

Contact.belongsTo(User);
User.hasMany(Contact);

module.exports = Contact;
