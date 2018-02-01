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

router.get('/content-check', function(req, res){
  checkContent(req, res, req.query['text']);
});

router.post('/content-check', function(req, res){
  checkContent(req, res, req.body['text']);
});

function checkContent(req, res, text) {
  var obj = {};

  retext.checkText(text, obj);
  res.header('Content-type','application/json');
  res.header('Charset','utf8');
  res.send(JSON.stringify(obj));
}

module.exports = router
