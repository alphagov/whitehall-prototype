var express = require('express')
var retext = require('../lib/retext.js')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

router.get('/patterns/content-checker', function(req, res) {
  var text = req.session.data['text'];
  var locals = {};
  retext.checkText(text, locals);
  res.render('patterns/content-checker', locals)
})

module.exports = router
