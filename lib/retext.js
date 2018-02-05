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
      case 'retext-repeated-words':
       // `for ` to `for for`
        message.actual = message.actual + message.actual;
        processedMessages.push(message);
        break;
      case 'retext-readability':
        message.message = message.message.split('(')[0]
        processedMessages.push(message);
        break;
      case 'retext-profanities':
        var notSwears = ['welfare'];

        if (notSwears.includes(message.actual)) {
          break;
        }

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

function customChecks(text, messages) {
  checkForLongSentences(text, messages);
  checkForLongParagraphs(text, messages);
}

function checkForLongSentences(text, messages) {
  var sentences = text.replace(/[\r\n]/g, '').replace(/\.\s/g, '.').split('.')

  sentences.forEach(function(sentence) {
    var wordCount = sentence.split(' ').length;
    if (wordCount > 25) {
      messages.push({
        actual: sentence,
        reason: 'Sentence too long ('+wordCount+'/25 words)',
        message: 'Sentence too long ('+wordCount+'/25 words)',
        name: '--',
        ruleId: 'checkForLongSentences',
        source: 'checkForLongSentences'
      });
    }
  });
}

function checkForLongParagraphs(text, messages) {
  var paragraphs = text.split('\n');
  paragraphs.forEach(function(para) {
    var wordCount = para.split(' ').length;
    if (wordCount > 75) {
      messages.push({
        actual: para,
        reason: 'Paragraph too long ('+wordCount+'/75 words)',
        message: 'Paragraph too long ('+wordCount+'/75 words)',
        name: '--',
        ruleId: 'checkForLongParagraphs',
        source: 'checkForLongParagraphs'
      });
    }
  });
}

exports.checkText = function (text, locals) {
  retext()
    .use(contractions)
    //.use(equality)
    .use(indefiniteArticle)
    //.use(overuse)
    .use(passive)
    .use(profanities)
    .use(readability, { age: 17 })
    .use(redundantAcronyms)
    .use(repeatedWords)
    .use(simplify)
    //.use(spell, dictionary)
    .use(usage)
    .process(text, function (err, file) {
      console.log(file.messages);

      messages = processMessages(file.messages)
      customChecks(text, messages);

      locals.report = messages;
      console.error(err || file);
    });
}
