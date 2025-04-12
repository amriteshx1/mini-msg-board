const express = require('express');
const router = express.Router();
const pool = require("../database/pool");



// GET homepage
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM messages ORDER BY added ASC')
  res.render('index', { title: 'Mini Messageboard', messages: result.rows });
});

// GET new message form
router.get('/new', (req, res) => {
  res.render('form', { title: 'Mini Messageboard' });
});

// POST new message
router.post('/new', async(req, res) => {
  const { userName, userMsg } = req.body;

  await pool.query(
    'INSERT INTO messages (text, username) VALUES ($1, $2)',
    [userMsg, userName]
  );
    res.redirect("/");
});

// Open message
router.get('/message/:id', async (req, res) => {
  const id = req.params.id;
  const result = await pool.query('SELECT * FROM messages WHERE id = $1', [id]);
    const msg = result.rows[0];
    if (!msg) return res.status(404).send("Message not found");

    console.log(msg);
    res.render('msg', {
      title: "Mini Messageboard",
      message: msg
    });
});

module.exports = router;
