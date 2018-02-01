;(function (global) {
  'use strict'

  var GOVUK = global.GOVUK || {}
  GOVUK.Modules = GOVUK.Modules || {}

  GOVUK.Modules.SlugFromTitle = function () {
    this.start = function (element) {
      element.on('change keyup', '#title', updateSlug);
      $('#title').trigger('keyup');

      function updateSlug(evt) {
        var title = $(this).val(),
            slug = title.replace(/ +/g, '-').toLowerCase().replace(/[^a-z0-9]+/g, '-');

        element.find('.js-dynamic-slug').text(slug);

        if (slug.length > 0) {
          element.find('.js-slug').show();
        } else {
          element.find('.js-slug').hide();
        }
      }
    }
  }

  global.GOVUK = GOVUK
})(window)
