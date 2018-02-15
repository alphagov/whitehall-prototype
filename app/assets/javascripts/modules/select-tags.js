;(function (global) {
  'use strict'

  var GOVUK = global.GOVUK || {}
  GOVUK.Modules = GOVUK.Modules || {}

  GOVUK.Modules.SelectTags = function () {
    this.start = function (element) {
      element.on('click', '.js-add-tag', addTag);
      element.on('click', '.js-remove-tag', removeTag);
      element.on('click', '.js-select-tag', selectTag);

      function addTag(evt) {
        evt.preventDefault();
        var selected = $('#tag-search-select').val();
        //$('#tag-search').val('').trigger('blur');
        addTagRow(selected);
      }

      function selectTag(evt) {
        evt.preventDefault();
        var tr = $(this).parents('tr');
        var newRow = tr.clone();
        tr.remove();

        newRow.find('.js-select-tag').removeClass('js-select-tag').addClass('js-remove-tag').text('Remove tag');

        $('.js-selected-tags-table').find('tbody').append(newRow);

        toggleTable();
      }

      function removeTag(evt) {
        evt.preventDefault();
        $(this).parents('tr').remove();
        toggleTable();
      }

      function addTagRow(value) {
        var newRow = $('.js-selected-tag-row').clone();
        newRow.find('.js-tag').text(value);
        newRow.removeClass('js-selected-tag-row');
        $('.js-selected-tags-table').find('tbody').append(newRow);
        newRow.show();
        toggleTable();
      }

      function toggleTable() {
        if ($('.js-selected-tags-table tr').length > 1) {
          $('.js-selected-tags-table').show();
          $('.js-none-selected').hide();
        } else {
          $('.js-selected-tags-table').hide();
          $('.js-none-selected').show();
        }

        if ($('.js-suggested-tags-table tr').length > 0) {
          $('.js-suggested-tags-table').show();
        } else {
          $('.js-suggested-tags-table').hide();
        }
      }
    }
  }

  global.GOVUK = GOVUK
})(window)
