/**
 * This code is an example of how you might bind our form submission events.
 * This is probably best combined with the externalJavaScript example found
 * here: https://github.com/blinkmobile/snippets/blob/master/madl/host-external-javascript.php
 */

$(document).ready(function() {
  var $doc = $(document);

  /**
   * NOTE: you only need to bind these events once in the below fashion.
   * Weird stuff might happen if you attempt to bind these events over and over.
   * So, put this code somewhere that only runs once per answerSpace (not once
   * per Interaction, and not once per Form).
   */

  $doc.on('formSubmitSuccess', function(event) {
    /* now you can make use of the following attributes:
     * - event.Blink.interaction
     * - event.Blink.form
     * - event.Blink.action
     * - event.Blink.uuid
     * - event.Blink.id (not available if action === 'add')
     * - event.Blink.jqxhr (see: http://api.jquery.com/jQuery.ajax/#jqXHR)
     */
  });

  $doc.on('formSubmitFail', function(event) {
    /* see formSubmitSuccess example above */
  });
});
