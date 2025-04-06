import rest from "./rest.js"

/**
 * Retrieves the last element(s) from an array or array-like object.
 * Provides flexible handling for edge cases and optional parameters.
 * 
 * @template T The type of elements in the input array.
 * 
 * @param {T[]} array The input array (or array-like objects) to process
 * @param {number} [n] Optional number of elements to return from the end:
 * - If `undefined` / `null` or when guard is truthy, returns only the last
 *   element
 * - If specified, returns last N elements as an array
 * @param {boolean} [guard] Optional flag that forces single-element return
 * when truthy.
 * 
 * @returns {T | T[] | undefined} Returns:
 * - Single element when `n` is unspecified or `guard` is truthy;
 * - Array of last N elements when `n` is specified;
 * - `undefined` for `null` or empty input when returning single element;
 * - Empty array for `null` or empty input when returning multiple elements.
 * 
 * @example
 * // Get last element
 * last([1, 2, 3]);                  // -> 3
 * last([1, 2, 3], null);            // -> 3
 * last([1, 2, 3], undefined, true); // -> 3
 * 
 * // Get last N elements
 * last([1, 2, 3, 4], 2);  // -> [3, 4]
 * 
 * // Edge cases
 * last([]);       // -> undefined
 * last(null, 2);  // -> []
 * last([], 3);    // -> []
 * 
 * @see rest Used internally for N-elements retrieval
 */
export default function last(array, n, guard) {
  if (array == null || array.length < 1) {
    return n == null || guard ? void 0 : [];
  }
  if (n == null || guard) {
    return array[array.length - 1];
  }
  return rest(array, Math.max(0, array.length - n));
}