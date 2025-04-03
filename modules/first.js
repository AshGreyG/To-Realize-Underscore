import initial from "./initial.js";

/**
 * @description Get the first element of an array. Passing `n` will return the
 * first **n** values in the array. The `guard` check allows it to return an array
 * not an undefined value.
 * @template T
 * @param {T[]} array The array needed to be processed.
 * @param {number} n The first `n` element that will be returned as an array.
 * @param {boolean} guard When `guard` is `true` or any other value that can be
 * implicitly converted to `true`, the function will never return an array.
 * @returns {T | T[] | undefined} See below (for array, null and [] are equal)
 * 
 * ``` javascript
 * first();                       => undefined
 * first(null);                   => undefined
 * first(null, null, true);       => undefined
 * first(null, 1, true);          => undefined
 * first(null, 1, false);         => []
 * first([1, 2, 3]);              => 1
 * first([1, 2, 3], null);        => 1
 * first([1, 2, 3, 4], 2);        => [1, 2]
 * first([1, 2, 3, 4], 2, true);  => 1
 * ```
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

// first();                       => undefined
// first(null);                   => undefined
// first(null, null, true);       => undefined
// first(null, 1, true);          => undefined
// first(null, 1, false);         => []
// first([1, 2, 3]);              => 1
// first([1, 2, 3], null);        => 1
// first([1, 2, 3, 4], 2);        => [1, 2]
// first([1, 2, 3, 4], 2, true);  => 1