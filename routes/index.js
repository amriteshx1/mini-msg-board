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

// POST new message
router.post('/new', (req, res) => {
    const userName = req.body.userName;
    const userMsg = req.body.userMsg;
    messages.push({ text: userMsg, user: userName, added: new Date() });
    res.redirect("/");
});

// Open message
router.get('/message/:id', (req, res) => {
  const id = req.params.id;
  const msg = messages[id];
  if (!msg) return res.status(404).send("Message not found");
  res.render('msg', { title: "Mini Messageboard", message: msg });
});

module.exports = router;
