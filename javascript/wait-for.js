// https://gist.github.com/jokeyrhyme/9753904

/* when Promises or Events are unavailable, this allows you to safely schedule code for the future */

/**
 * @param {Function} condition a function that returns `true` or `false`
 * @param {Number} [interval=197] the amount of time to wait between tests
 * @param {Function} callback a function to invoke when the condition returns `true`
 */
function waitFor(condition, interval, callback) {
  'use strict';
  if (condition && condition()) {
    callback();
  } else {
    setTimeout(function () {
      waitFor(condition, interval, callback);
    }, interval || 197)
  }
};
