import initial from "./initial.js";

/**
 * Retrieves the first element(s) from an array or array-like object.
 * Provides flexible handling for edge cases and optional parameters.
 * 
 * @template T The type of elements in the input array.
 * 
 * @param {T[]} array The input array (or array-like objects) to process
 * @param {number} [n] Optional number of elements to return from the start:
 * - If `undefined` / `null` or when guard is truthy, returns only the first
 *   element
 * - If specified, returns first N elements as an array
 * @param {boolean} [guard] Optional flag that forces single-element return
 * when truthy.
 * 
 * @returns {T | T[] | undefined} Returns:
 * - Single element when `n` is unspecified or `guard` is truthy;
 * - Array of first N elements when `n` is specified;
 * - `undefined` for `null` or empty input when returning single element;
 * - Empty array for `null` or empty input when returning multiple elements.
 * 
 * @example
 * // Get first element
 * first([1, 2, 3]);                  // -> 1
 * first([1, 2, 3], null);            // -> 1
 * first([1, 2, 3], undefined, true); // -> 1
 * 
 * // Get first N elements
 * first([1, 2, 3, 4], 2);  // -> [1, 2]
 * 
 * // Edge cases
 * first([]);       // -> undefined
 * first(null, 2);  // -> []
 * first([], 3);    // -> []
 * 
 * @see initial Used internally for N-elements retrieval
 */
export default function first(array, n, guard) {
  if (array == null || array.length < 1) {
    return n == null || guard ? void 0 : [];
  }
  // Using `array == null` can cover two conditions:
  //   1. `array === undefined`, that's to say, the parameter `array`
  //      is not passed into the function
  //   2. `array === null`, that's to say, the parameter `array` is
  //      passed explicitly into the function

  // void 0 is often used to obtain the `undefined` primitive value. In
  // these cases, the global variable `undefined` can be used instead.
  if (n == null || guard) {
    return array[0];
  }
  return initial(array, array.length - n);
}