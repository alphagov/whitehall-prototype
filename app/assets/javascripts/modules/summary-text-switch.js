;(function (global) {
  'use strict'

  var GOVUK = global.GOVUK || {}
  GOVUK.Modules = GOVUK.Modules || {}

  GOVUK.Modules.SummaryTextSwitch = function () {
    this.start = function ($element) {
      var self = this;

      this.$element = $element;
      this.options = $element.data('options').split(',');
      this.template = $element.data('texttemplate');

      $element.on('click', '', switchText);
      
      function switchText (evt) {
        if (self.$element.parent('details').attr('open')) {
          $element.text(self.template.replace(/\{\}/, self.options[0]));
        }
        else {
          $element.text(self.template.replace(/\{\}/, self.options[1]));
        }
      }
    }
  }

  global.GOVUK = GOVUK
})(window)
