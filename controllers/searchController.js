const { Op } = require("sequelize");
const User = require("../models/User");

exports.searchByName = async (req, res) => {
  const { name } = req.query;

  try {
    const results = await User.findAll({
      where: { name: { [Op.iLike]: `${name}%` } },
      order: [["name", "ASC"]]
    });

    res.json(results);
  } catch (error) {
    res.status(400).json({ error: "Search error" });
  }
};

exports.searchByPhoneNumber = async (req, res) => {
  const { phone } = req.query;

  try {
    const results = await User.findAll({ where: { phone } });
    res.json(results);
  } catch (error) {
    res.status(400).json({ error: "Search error" });
  }
};
