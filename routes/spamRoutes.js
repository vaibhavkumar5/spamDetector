const express = require("express");
const { markAsSpam, getSpamLikelihood } = require("../controllers/spamController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/mark", authMiddleware, markAsSpam);
router.get("/likelihood/:phone", authMiddleware, getSpamLikelihood);

module.exports = router;
