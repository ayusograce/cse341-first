const express = require('express');
const path = require('path');
const router = express.Router();

// Route for serving index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

module.exports = router;
