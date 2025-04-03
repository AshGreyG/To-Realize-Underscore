import { slice } from "./_setup.js";

/**
 * @description Returns everything but the last entry of array. Especially useful on
 * the arguments object. Passing `n` will return all the values in the array, excluding
 * last n elements.
 * @template T
 * @param {T[]} array The array needed to be processed.
 * @param {number} n The last `n` elements will be excluded.
 * @param {boolean} guard When guard is `true` (or any other value that can be implicitly converted
 * to `true`), the argument `n` will not influence the result.
 * @returns {T[]} See below
 * 
 * ``` javascript
 * initial([1, 2, 3]);              => [1, 2]
 * initial([1, 3, 4, 2], 0);        => [1, 3, 4, 2]
 * initial([1, 3, 4, 4], 2, true);  => [1, 3, 4]
 * initial([1, 3, 4, 4], 2, 1]);    => [1, 3, 4]* 
 * ```
 */
export default function initial(array, n, guard) {
  return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
}

// initial([1, 2, 3]);              => [1, 2]
// initial([1, 3, 4, 2], 0);        => [1, 3, 4, 2]
// initial([1, 3, 4, 4], 2, true);  => [1, 3, 4]
// initial([1, 3, 4, 4], 2, 1]);    => [1, 3, 4]