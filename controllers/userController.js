const Contact = require("../models/Contact");
const User = require("../models/User");

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, { attributes: ["name", "phone", "email"] });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error finding profile" });
  }
};

exports.addContact = async (req, res) => {
  const { name, phone } = req.body;

  try {
    await Contact.create({ name, phone, UserId: req.user.id });
    res.status(201).json({ message: "Contact added" });
  } catch (error) {
    res.status(500).json({ error: "Error adding contact" });
  }
};
