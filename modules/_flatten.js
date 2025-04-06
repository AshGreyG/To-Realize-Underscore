import getLength from "./_getLength.js";
import isArrayLike from "./_isArrayLike.js";
import isArray from "./isArray.js";
import isArguments from "./isArguments.js";

/**
 * Recursively flattens a nested array or array-like object up to a specified depth.
 * 
 * @template T The type of elements in the input array
 * 
 * @param {T[] | ArrayLike<T>} input The nested array or array-like object
 * to flatten.
 * @param {number} [depth] The maximum recursion depth:
 * - If undefined or not provided, flattens completely (depth = Infinity);
 * - If <= 0, returns the input;
 * - If positive number, flattens up to that depth.
 * @param {boolean} [strict=false] When true, skip non-array elements in the output.
 * @param {T[]} [output] Internal accumulator array used for recursion.
 * 
 * @returns {T[]} A new flattened array.
 * 
 * @example
 * // Full flatten (default)
 * flatten([1, [2, [3, [4]]]]);               // -> [1, 2, 3, 4]
 * 
 * // Depth-limited flatten
 * flatten([1, [2, [3, [4]]]], 2);            // -> [1, 2, 3, [4]]
 * 
 * // Strict mode flatten (skip non-arrays)
 * flatten([1, [2, {}], 3], Infinity, true);  // -> []
 * 
 * // Array-like objects flatten
 * flatten({ 0: "a", 1: "b", length: 2 }, 2); // -> ["a", "b"]
 */
export default function flatten(input, depth, strict, output) {
  output = output || [];

  if (!depth && depth !== 0) {
    depth = Infinity; 
    
    // The depth is default as Infinity
  } else if (depth <= 0) {
    return output.concat(input);
    
    // If depth is less than zero, return the result immediately
  }

  var idx = output.length;
  for (var i = 0, length = getLength(input); i < length; ++i) {
    var value = input[i];
    if (isArrayLike(value) && (isArray(value) || isArguments(value))) {
      // Flatten current level of array or arguments object

      if (depth > 1) {
        flatten(value, depth - 1, strict, output);
        idx = output.length;
      } else {
        var j = 0, len = value.length;
        while (j < len) output[idx++] = value[j++];
      }
    } else if (!strict) {
      output[idx++] = value;
    }
  }
  return output;
}