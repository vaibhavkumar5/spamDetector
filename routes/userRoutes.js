const express = require("express");
const { getProfile, addContact } = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/profile", authMiddleware, getProfile);
router.post("/contact", authMiddleware, addContact);

module.exports = router;
