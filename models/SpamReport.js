const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");

const SpamReport = sequelize.define("SpamReport", {
  phone: DataTypes.STRING
});

module.exports = SpamReport;
