/**
 * @template {Function} T The type of the original function
 * 
 * @param {T} func The function to wrap
 * @param {number} startIndex The position where rest parameters start.
 * - If `null` or `undefined`, use `func.length - 1`
 * - If specified, converts to number (0-based)
 * 
 * @returns {(...args: any[]) => ReturnType<T>} A new function that
 * - Collects arguments from `startIndex` onward into an array;
 * - Passes them as the last argument to the original function;
 * - Maintains the original function's context.
 * 
 * @example
 * // Basic usage (similar to ES6 rest arguments)
 * const fn = restArguments(function(a, rest) {
 *   return [a, rest];
 * });
 * fn(1, 2, 3); // [1, [2, 3]]
 * 
 * // Custom start index
 * const fn = restArguments(function(a, b, rest) {
 *   return [a, b, rest];
 * }, 2);
 * fn(1, 2, 3, 4);  // [1, 2, [3, 4]]
 * 
 * // Automatic wrapping
 * const fn = restArguments(function(a, b, c, rest) {
 *   return [a + b + c, rest];
 * });
 * fn(1, 2, 3, 4, 5, 6);  // [6, [4, 5, 6]]
 */
export default function restArguments(func, startIndex) {
  startIndex = startIndex == null ? func.length - 1 : +startIndex;

  // When startIndex is not passed into this function, it will automatically treat
  // the last parameter as rest.

  return function() {
    var length = Math.max(arguments.length - startIndex, 0),
      rest = Array(length),
      index = 0;

    // This arguments variable is of the return function

    // Copy arguments from startIndex onward into rest array
    for (; index < length; index++) {
      rest[index] = arguments[startIndex + index];
    }

    switch (startIndex) {
      case 0 : return func.call(this, rest);
      case 1 : return func.call(this, arguments[0], rest);
      case 2 : return func.call(this, arguments[0], arguments[1], rest);
    }

    var args = Array(startIndex + 1);
    for (index = 0; index < startIndex; index++) {
      args[index] = arguments[index];
    }

    args[startIndex] = rest;
    return func.apply(this, args);
  }

  // This is the usage example of closure, the outer function won't be destroyed
  // until the variable referred to this outer function is destroyed.
}
