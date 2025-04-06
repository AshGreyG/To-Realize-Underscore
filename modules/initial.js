import { slice } from "./_setup.js";

/**
 * Creates a new array with all elements except the last N elements.
 * If N is not specified or invalid, removes only the last element by default.
 * 
 * @template T The type of elements in the input array.
 * 
 * @param {T[]} array The input array or array-like objects to process.
 * @param {number} [n] Optional number of elements to skip from the end. If
 * `null` or `undefined` or when guard is truthy, defaults to 1.
 * @param {boolean} [guard] Optional guard flag that forces default behavior
 * when truthy (ignore `n` parameter)
 * 
 * @returns {T[]} A new array containing elements from the start to the position
 * end - N.
 * 
 * @example
 * // Basic usage
 * initial([1, 2, 3]);              // -> [1, 2]
 * 
 * // Skip last 2 elements
 * initial([1, 3, 4, 2], 2);        // -> [1, 3]
 * 
 * // With guard (ignores n)
 * initial([1, 3, 4, 4], 2, true);  // -> [1, 3, 4]
 * initial([1, 3, 4, 4], 2, 1]);    // -> [1, 3, 4]
 * 
 * // Works with array-like objects
 * initial(arguments, 1);
 */
export default function initial(array, n, guard) {
  return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
}