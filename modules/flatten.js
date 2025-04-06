import _flatten from "./_flatten.js";

/**
 * Flatten out an array, either recursively by default or up to `depth`.
 * 
 * @template T The type of elements in input `array`
 * 
 * @param {T[] | ArrayLike<T>} array The nested array or array-like object
 * @param {number} [depth] The maximum recursion depth:
 * - If undefined or not provided, flattens completely (depth = Infinity);
 * - If <= 0, returns the input;
 * - If positive number, flattens up to that depth.
 * 
 * @returns {T[]} A new flattened array.
 */
export default function flatten(array, depth) {
  return _flatten(array, depth, false);
}