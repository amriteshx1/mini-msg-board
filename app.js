const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];  

//Index Route
app.get('/', (req, res) => {
    res.render('index', { title: "Mini Messageboard", messages: messages });
});


// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });