/**
 * Creates a function that safely retrieves a property from an object.
 * The returned function will return undefined if the input object is `null`
 * or `undefined`, preventing property access errors.
 * 
 * @template T The type of the object
 * @template K The type of the property key
 * 
 * @param {K} key The property key to access
 * 
 * @returns {(obj: T) => T[K] | undefined} A function that takes an object and
 * returns:
 *   - The value of the specified property if the object exists
 *   - `undefined` if the object is `null` or `undefined`
 * 
 * @example
 * // Create property accessor
 * const getName = shallowProperty("name");
 * 
 * // Safe property accessor
 * getName({ name: "Alice" });  // -> "Alice"
 * getName(null);               // -> undefined
 * getName(undefined);          // -> undefined
 * 
 * @example
 * // Usage with array-like objects
 * const getLength = shallowProperty("length");
 * 
 * getLength([1, 2, 3]);  // -> 3
 * getLength("hello");    // -> 5
 * 
 * @remarks
 * This is particularly useful for
 * - Safe property access in chains;
 * - Creating reusable property accessors;
 * - Working with potentially `null` / `undefined` values
 */
export default function shallowProperty(key) {
  return function(obj) {
    return obj == null ? void 0 : obj[key];
  }
}