import rest from "./rest.js"

/**
 * @description Get the last element of an array. Passing `n` will return
 * the last **n** values in the array.
 * @template T
 * @param {T[]} array The array needed to be processed.
 * @param {number} n The last `n` element that will be returned as an array.
 * @param {boolean} guard When `guard` is `true` or any other value that can be
 * implicitly converted to `true`, the function will never return an array.
 * @returns {T | T[] | undefined} See below (for array, null and [] are equal)
 * 
 * ``` javascript
 * last();                       => undefined
 * last(null);                   => undefined
 * last(null, null, true);       => undefined
 * last(null, 1, true);          => undefined
 * last(null, 1, false);         => []
 * last([1, 2, 3]);              => 3
 * last([1, 2, 3], null);        => 3
 * last([1, 2, 3, 4], 2);        => [3, 4]
 * last([1, 2, 3, 4], 2, true);  => 4
 * ```
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

// last();                       => undefined
// last(null);                   => undefined
// last(null, null, true);       => undefined
// last(null, 1, true);          => undefined
// last(null, 1, false);         => []
// last([1, 2, 3]);              => 3
// last([1, 2, 3], null);        => 3
// last([1, 2, 3, 4], 2);        => [3, 4]
// last([1, 2, 3, 4], 2, true);  => 4