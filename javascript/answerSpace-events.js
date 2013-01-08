/* available since 2012W35 */

$(document).on('viewShow', function() {
// this = the .view element
/* insert code to run after a view transition is completed */
});

$(document).on('viewReady', function() {
// this = the .view element
/* insert code to run after a view has been enhanced with Stars, Forms, Maps, etc */
});

$(document).on('formReady', function() {
// this = the form element
/* insert code to run after a form has been rendered, populated, and inserted into the page */
});

$(document).on('formSubmitSuccess', function() {
// this: not explicitly declared for this event
/* insert code to run after a successful submission */
});

$(document).on('formSubmitError', function() {
// this: not explicitly declared for this event
/* insert code to run after a failed submission */
});
