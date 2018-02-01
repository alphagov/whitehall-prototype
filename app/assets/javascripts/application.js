/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  GOVUK.modules.start();

  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Show and hide toggled content
  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()

  GOVUK.modalDialog.init()

  if ($('#body-with-markdown').length > 0) {
    var myCodeMirror = CodeMirror.fromTextArea(document.getElementById('body-with-markdown'), {
                            lineWrapping: true,
                            viewportMargin: Infinity,
                            cursorHeight: 0.85
                          }
                        );
  }
})
