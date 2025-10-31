const aiService = require("../services/ai.service");

// GET version (already working)
module.exports.getResponse = async (req, res) => {
    const prompt = req.query.prompt;

    if (!prompt) {
        return res.status(400).send("Prompt is required");
    }

    const response = await aiService(prompt);
    res.send(response);
};

// POST version (optional better structured)
module.exports.getReview = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).send("Code is required");
    }

    const response = await aiService(code);
    res.send({ result: response });
};