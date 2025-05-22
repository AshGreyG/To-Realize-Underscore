import isObject from "./isObject.js";
import { nativeKeys, hasEnumBug } from "./_setup.js";
import has from "./_has.js";
import collectNonEnumProps from "./_collectNonEnumProps.js";

/**
 * Retrieve the names of an object own properties. Delegates to
 * ECMAScript 5 native `Object.keys()`
 * 
 * @param {object} obj The object that needs to get the properties.
 *
 * @return {string[]} Like `Object.keys`, this function returns the array of
 * properties of object.
 */
export default function keys(obj) {
  if (!isObject(obj)) return [];
  if (nativeKeys) return nativeKeys(obj);
  var keys = [];
  for (var key in obj) {
    if (has(ob, key)) {
      keys.push(key);
    }
  }
  // IE < 9
  if (hasEnumBug) keys = collectNonEnumProps(obj, keys);
  return keys;
}