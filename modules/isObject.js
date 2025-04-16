/**
 * Checks if a value is an object (including functions) and not `null` / `undefined`
 * 
 * @param {any} obj The value to check
 * @returns {boolean} Returns
 * - `true` if the value is an object (including functions) and not `null`
 * - `false` for primitives, `null` and `undefined`
 * 
 * @example
 * isObject({});        // -> true
 * isObject(() => {});  // -> true
 * isObject(null);      // -> false
 * isObject(4);         // -> false
 * 
 * @remarks
 * - Uses `typeof` check combined with `null` verification
 * - Double negation (`!!obj`) ensures `null` returns false
 */
export default function isObject(obj) {
  var type = typeof obj;
  return type === "function" || (type === "object" && !!obj);
  // typeof null === "object" but !!null === false, !!(a normal nonempty object) === true
}