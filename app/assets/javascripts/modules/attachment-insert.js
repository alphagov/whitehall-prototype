;(function (global) {
  'use strict'

  var GOVUK = global.GOVUK || {}
  GOVUK.Modules = GOVUK.Modules || {}

  GOVUK.Modules.AttachmentInsert = function () {
    this.start = function (element) {
      element.on('click', '.js-attachment', insertAttachment);

      // https://stackoverflow.com/questions/11076975
      function insertAttachment(evt) {
        evt.preventDefault();
        var markdown = $(this).data('markdown');
        var cursorPos = $('#body').prop('selectionStart');

        if (cursorPos === 0 && $('#body').val().length > 0) {
          cursorPos = $('#body').val().length;
        }

        var v = $('#body').val();
        var textBefore = v.substring(0,  cursorPos);
        var textAfter  = v.substring(cursorPos, v.length);
        $('#body').val(textBefore + '\n' + markdown + textAfter);
      }
    }
  }

  global.GOVUK = GOVUK
})(window)
