/* available since 2012W35 */


$(document).on('viewShow', function() {
// this = the .view element
/* TODO: insert code to run after a view transition is completed */
});

$(document).on('viewReady', function() {
// this = the .view element
/* TODO: insert code to run after a view has been enhanced with Stars, Forms, Maps, etc */
});

$(document).on('formReady', function() {
// this = the form element
/* TODO: insert code to run after a form has been rendered, populated, and inserted into the page */
});


$(document).on('formSubmitSuccess', function(event) {
// this: not explicitly declared for this event
/* now you can make use of the following attributes:
 * - event.Blink.interaction
 * - event.Blink.form
 * - event.Blink.action
 * - event.Blink.uuid
 * - event.Blink.id (not available if action === 'add')
 * - event.Blink.jqxhr (see: http://api.jquery.com/jQuery.ajax/#jqXHR)
 */
 /* TODO:insert code to run after a successful submission */
});

$(document).on('formSubmitError', function(event) {
// this: not explicitly declared for this event
/* see formSubmitSuccess example above */
/* TODO: insert code to run after a failed submission */
});

/**
 * Hint: use $(document).one(...) if you only want your code to run exactly one time.
 */

/**
 * subForm... events available in Weekly 2013.03
 */

$(document).on('subFormReady', function(event) {
// this = the subform element
// event.Blink.formElement = the BlinkFormElement for the linking field
// event.Blink.formObject = the BlinkFormObject for the sub record that was just added
// TODO: insert code to run after a sub-form has been added or populated
});

$(document).on('subFormRemoved', function(event) {
// this = the subform element
// event.Blink.formElement = the BlinkFormElement for the linking field
// TODO: insert code to run after a sub-form has been added or populated
});
