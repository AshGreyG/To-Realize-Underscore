import { hasOwnProperty } from "./_setup.js";

/**
 * Safely checks if an object has its own (non-inherited) property.
 * Returns `false` for `null` or `undefined` inputs, preventing errors.
 * 
 * @template T The type of the object being checked
 * @template K The type of the property key (string | number | symbol)
 * 
 * @param {T} obj The object to check (can be `null` or `undefined`).
 * 
 * @param {K} key The property key to check for.
 * 
 * @returns {boolean} Returns
 * - `true` if the object exists and has the own property
 * - `false` if
 *   - The object is `null` or `undefined`;
 *   - The property doesn't exist;
 *   - The property exists only in the property chain
 * 
 * @example
 * // Check own property
 * has({ foo: "bar" }, "foo");  // -> true
 * has({}, "toString");         // -> false
 * 
 * // Safe with null / undefined
 * has(null, "test");           // -> false
 * has(undefined, "test");      // -> false
 * 
 * // Works with non-string keys
 * const sym = new Symbol();
 * has({ [sym]: true }, "sym"); // -> true
 * 
 * @remarks
 * Use `Object.prototype.hasOwnProperty()` for reliable property checking.
 * More reliable then the `in` operator as it doesn't check prototype chain.
 * Safer than direct `hasOwnProperty` calls as it handles `null` / `undefined`.
 */
export default function has(obj, key) {
  return obj != null && hasOwnProperty.call(obj, key);
}