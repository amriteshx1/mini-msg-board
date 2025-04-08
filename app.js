const express = require('express');
const path = require('path');

const app = express();
const indexRouter = require('./routes/index');
const port = 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// Routes
app.use('/', indexRouter);

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });