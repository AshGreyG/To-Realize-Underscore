import { slice } from "./_setup.js";

/**
 * Creates a new array with all elements except the first N elements.
 * If N is not specified or invalid, removes only the first element by default.
 * 
 * @template T The type of elements in the input array.
 * 
 * @param {T[]} array The input array or array-like objects to process.
 * 
 * @param {number} [n] Optional number of elements to skip from the start. If
 * `null` or `undefined` or when guard is truthy, defaults to 1.
 * 
 * @param {boolean} [guard] Optional guard flag that forces default behavior
 * when truthy (ignore `n` parameter)
 * 
 * @returns {T[]} A new array containing elements from position N to the end.
 * 
 * @example
 * // Basic usage
 * rest([1, 2, 3]);              // -> [2, 3]
 * 
 * // Skip first 2 elements
 * rest([1, 3, 4, 2], 2);        // -> [4, 2]
 * 
 * // With guard (ignores n)
 * rest([1, 3, 4, 4], 2, true);  // -> [3, 4, 4]
 * rest([1, 3, 4, 4], 2, 1]);    // -> [3, 4, 4]
 * 
 * // Works with array-like objects
 * rest(arguments, 1);
 */
export default function rest(array, n, guard) {
  return slice.call(array, n == null || guard ? 1 : n);
}