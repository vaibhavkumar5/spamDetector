const SpamReport = require("../models/SpamReport");

exports.markAsSpam = async (req, res) => {
  const { phone } = req.body;

  try {
    await SpamReport.create({ phone, UserId: req.user.id });
    res.status(201).json({ message: "Number marked as spam" });
  } catch (error) {
    res.status(400).json({ error: "Unable to mark as spam" });
  }
};

exports.getSpamLikelihood = async (req, res) => {
  const { phone } = req.params;

  try {
    const reportCount = await SpamReport.count({ where: { phone } });
    const likelihood = reportCount > 0 ? `${(reportCount / 100) * 100}%` : "0%";
    res.json({ phone, likelihood });
  } catch (error) {
    res.status(400).json({ error: "Error calculating spam likelihood" });
  }
};
