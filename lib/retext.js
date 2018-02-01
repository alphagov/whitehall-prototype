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

function processMessages(messages) {
  var processedMessages = [];

  messages.forEach(function(message) {
    switch (message.source) {
      case 'retext-profanities':
        if (message.profanitySeverity > 1) {
          processedMessages.push(message);
        }
        break;
      case 'retext-contractions':
        // Don’t warn about ”’ not matching "'
        var converted = message.expected[0].replace(/[\u2018\u2019]/g, "'")
                                           .replace(/[\u201C\u201D]/g, '"');
        if (converted != message.actual) {
          processedMessages.push(message);
        }
        break;
      default:
        processedMessages.push(message);
    }
  });

  return processedMessages;
}

exports.checkText = function (text, locals) {
  retext()
    .use(contractions)
    //.use(equality)
    .use(indefiniteArticle)
    //.use(overuse)
    .use(passive)
    .use(profanities)
    .use(readability)
    .use(redundantAcronyms)
    .use(repeatedWords)
    .use(simplify)
    //.use(spell, dictionary)
    .use(usage)
    .process(text, function (err, file) {
      console.log(file.messages);

      locals.report = processMessages(file.messages);
      console.error(err || file);
    });
}
