const express = require('express');
const router = express.Router();

const messages = [
  {
    title: 'Welcome message',
    text: 'Hi there!',
    user: 'Amando',
    added: new Date()
  },
  {
    title: 'Hellow World',
    text: "Yes, just hello world, that's it.",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages });
});

/* GET new message page. */
router.get('/new', function(req, res, next) {
  res.render('form', {title: 'Create New Message'});
});

/* POST new message page. */
router.post('/new', function(req, res, next) {
  messages.push({
    title: req.body.messageTitle,
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date()
  })

  res.redirect('/')
});

module.exports = router;
