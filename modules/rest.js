import { slice } from "./_setup.js";

/**
 * @description Returns everything but the first entry of the `array`.
 * Especially useful on the `arguments` object. Passing an `n` will return
 * the rest **n** values in the `array`.
 * @template T
 * @param {T[]} array The array needed to be processed.
 * @param {number} n The first `n` elements will be excluded.
 * @param {boolean} guard When guard is `true` (or any other value that can be implicitly converted
 * to `true`), the argument `n` will not influence the result.
 * @returns {T[]} See below
 * 
 * ``` javascript
 * rest([1, 2, 3]);              => [2, 3]
 * rest([1, 3, 4, 2], 0);        => [1, 3, 4, 2]
 * rest([1, 3, 4, 4], 2, true);  => [3, 4, 4]
 * rest([1, 3, 4, 4], 2, 1]);    => [3, 4, 4]
 */
export default function rest(array, n, guard) {
  return slice.call(array, n == null || guard ? 1 : n);
}

// rest([1, 2, 3]);              => [2, 3]
// rest([1, 3, 4, 2], 0);        => [1, 3, 4, 2]
// rest([1, 3, 4, 4], 2, true);  => [3, 4, 4]
// rest([1, 3, 4, 4], 2, 1]);    => [3, 4, 4]