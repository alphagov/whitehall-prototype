const express = require('express')
const retext = require('../lib/retext.js')
const marked = require('../lib/marked.js')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.get('/dashboard', function(req, res) {
  req.session.destroy();
  res.render('dashboard');
});

router.get('/intent', function(req, res) {
  req.session.destroy();
  res.render('intent');
});

router.get('/submit-for-review', function(req, res) {
  var data = req.session.data;
  var errors = [];
  var locals = {};

  if (!data.summary) {
    errors.push({
      title: 'Enter a summary',
      link: '/title-summary-body#summary'
    })
  }

  if (!data.body) {
    errors.push({
      title: 'Enter body copy',
      link: '/title-summary-body#body-label'
    })
  }

  if (!data['lead-organisation']) {
    errors.push({
      title: 'Enter a lead organisation',
      link: '/about-content#lead-organisation-label'
    })
  }

  if (errors.length > 0) {
    locals.errors = errors;
  } else {
    locals.success = true;
  }

  res.render('document-tasks', locals);
});

// Add your routes here - above the module.exports line

router.get('/attachment/:attachmentId', function(req, res){
  res.render('attachment', req.params)
});

router.get('/patterns/content-checker', function(req, res) {
  var text = req.session.data['text'];
  var locals = {};
  retext.checkText(text, locals);
  res.render('patterns/content-checker', locals)
})

router.get('/preview', function(req, res) {
  var text = req.session.data['body'];
  var locals = {};
  marked.convertMarkdownToHTML(text, locals);
  res.render('preview', locals)
})

router.get('/document-type', function(req, res) {
  if (req.session.data['format'] == 'News article'
        || req.session.data['format'] == 'Speech'
        || req.session.data['format'] == 'Medical safety alert') {
    res.render('document-type', req.params);
  } else {
    res.redirect('/title-summary-body');
  }
});

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

router.get('/live-preview', function(req, res){
  livePreview(req, res, req.query['text']);
});

router.post('/live-preview', function(req, res){
  livePreview(req, res, req.body['text']);
});

function livePreview(req, res, text) {
  var obj = {};
  text = text || "";
  marked.convertMarkdownToHTML(text, obj);
  res.header('Content-type','application/json');
  res.header('Charset','utf8');
  res.send(JSON.stringify(obj));
}

module.exports = router
