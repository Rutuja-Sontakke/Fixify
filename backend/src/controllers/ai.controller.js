const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
  try {
    const code = req.body.code;

    if (!code) {
      return res.status(400).json({ error: "Code is required" });
    }

    const response = await aiService(code);
    return res.json({ result: response });
  } catch (error) {
    console.error("Error in getReview:", error);
    return res.status(500).json({ error: "Server error while processing code review." });
  }
};
