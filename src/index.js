'use strict';


/**
 *
 */
function removeOne(arr = [], fn) {
  const len = arr.length;

  // If value is provided rather than function, set fn as strict equality check
  // to provided value.
  if (!(fn.call && fn.apply)) {
    const val = fn;
    fn = el => el === val;
  }

  for (let i = 0; i < len; i++) {
    if (fn(arr[i], i, arr)) {
      return [...arr.slice(0, i), ...arr.slice(i + 1)];
    }
  }

  return arr.slice();
};


/**
 *
 */
module.exports = removeOne;
