/**
 * This should only be used until "viewReady" is fixed so that it triggers for the initial screen.
 * Any solution (like this one) that uses polling is a bad idea and not a long-term solution.
 *
 * This JavaScript could be inserted in a script tag in the htmlHead setting.
 */

$(document).ready(function() {
  var boxedElements = $('.view > .box').children().length,
      checkReady = function() {
        if ($('#startUp').length === 0 && $('.view > .box').children().length !== boxedElements) {
          // startup progress-dot screen is gone now
          // TODO: fill this out with the code you want to run
        } else {
          // not gone yet, check again in 197 milliseconds
          setTimeout(checkReady, 197);
        }
      };

  checkReady();
});
