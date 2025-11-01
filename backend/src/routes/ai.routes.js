const express = require('express');
const router = express.Router();
const aiController = require('../controllers/ai.controller');

// test GET route
router.get('/get-response', aiController.getResponse);

// route for POST
router.post('/get-review', aiController.getReview);

module.exports = router;
