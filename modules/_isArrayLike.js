import { MAX_ARRAY_INDEX } from "./_setup.js";

/**
 * Factory function that generates a validator to check if a collection's
 * size property is valid. The validator ensures the size is non-negative
 * number within JavaScript's maximum array bounds.
 * 
 * @param {function} getSizeProperty A function that extracts the size-like
 * property like `size`, `length` etc. from the `collection`
 * 
 * @returns {function} A validator function that takes a collection and 
 * returns true if its size property 
 * 
 * @example
 * // For Set / Map, checking `size`
 * const checkSize = createSizePropertyCheck(collection => collection.size);
 * checkSize(new Set([1, 2]));              // -> true
 * checkSize(new Map(["a", 1], ["b", 2]));  // -> true
 * 
 * @remarks
 * The validator checks three conditions:
 * 1. The size property must be type of number;
 * 2. The value must be >= 0;
 * 3. The value must be <= MAX_ARRAY_INDEX (typically `2 ^ 53 - 1`)
 */
export default function createSizePropertyCheck(getSizeProperty) {
  return function(collection) {
    var sizeProperty = getSizeProperty(collection);
    return typeof sizeProperty == "number" &&
      sizeProperty >= 0 &&
      sizeProperty <= MAX_ARRAY_INDEX;
  }
}