var retext = require('retext');
var simplify = require('retext-simplify');
var equality = require('retext-equality');
var profanities = require('retext-profanities');

exports.checkText = function (text, locals) {
  retext()
    .use(simplify)
    .use(equality)
    .use(profanities)
    .process(text, function (err, file) {
      console.log(file.messages);

      locals.report = file.messages;
      console.error(err || file);
    });
}
