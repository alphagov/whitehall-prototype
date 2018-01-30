var retext = require('retext');
var dictionary = require('dictionary-en-gb');

var contractions = require('retext-contractions');
var english = require('retext-english');
var equality = require('retext-equality');
var indefiniteArticle = require('retext-indefinite-article');
var overuse = require('retext-overuse');
var passive = require('retext-passive');
var profanities = require('retext-profanities');
var readability = require('retext-readability');
var redundantAcronyms = require('retext-redundant-acronyms');
var repeatedWords = require('retext-repeated-words');
var simplify = require('retext-simplify');
var spell = require('retext-spell');
var usage = require('retext-usage');

exports.checkText = function (text, locals) {
  retext()
    .use(contractions, {straight: true})
    //.use(equality)
    .use(indefiniteArticle)
    //.use(overuse)
    .use(passive)
    //.use(profanities)
    .use(readability)
    .use(redundantAcronyms)
    .use(repeatedWords)
    .use(simplify)
    //.use(spell, dictionary)
    .use(usage)
    .process(text, function (err, file) {
      console.log(file.messages);

      locals.report = file.messages;
      console.error(err || file);
    });
}
