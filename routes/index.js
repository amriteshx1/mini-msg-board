const express = require('express');
const router = express.Router();

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

// GET homepage
router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages });
});

// GET new message form
router.get('/new', (req, res) => {
  res.render('form', { title: 'Mini Messageboard' });
});


module.exports = router;
