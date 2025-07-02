const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Use the router from routes/index.js
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Optionally, serve static files for other assets (css, js, images)
app.use(express.static('frontend'));

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});