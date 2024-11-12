const express = require("express");
const { searchByName, searchByPhoneNumber } = require("../controllers/searchController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/name", authMiddleware, searchByName);
router.get("/phone", authMiddleware, searchByPhoneNumber);

module.exports = router;
