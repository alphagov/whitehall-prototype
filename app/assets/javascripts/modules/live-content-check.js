;(function (global) {
  'use strict'

  var GOVUK = global.GOVUK || {}
  GOVUK.Modules = GOVUK.Modules || {}

  GOVUK.Modules.LiveContentCheck = function () {
    this.start = function (element) {
      element.on('keyup mouseup change', '.js-check-content', $.debounce( 250, checkContent ));

      function checkContent(evt) {
        var text = $(this).val();
        var previous = $(this).data('previous');

        if (text == previous) {
          return;
        } else {
          $(this).data('previous', text);
        }

        $.ajax({
          type: "POST",
          url: '/content-check',
          data: {
            text: text
          },
          success: function(data) {
            console.log(data);
          },
          dataType: 'json'
        });
      }
    }
  }

  global.GOVUK = GOVUK
})(window)
