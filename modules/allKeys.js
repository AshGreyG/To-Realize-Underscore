import isObject from "./isObject.js";
import { hasEnumBug } from "./_setup.js";
import collectNonEnumProps from "./_collectNonEnumProps.js";

/**
 * Retrieve the names of an object own properties. Delegates to
 * ECMAScript 5 native `Object.keys()`
 * 
 * @param {any} obj The object that needs to get the properties.
 *
 * @returns {string[]} Like `Object.keys`, this function returns the array of
 * properties of object.
 */
export default function keys(obj) {
  if (!isObject(obj)) return [];
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }
  // IE < 9
  if (hasEnumBug) keys = collectNonEnumProps(obj, keys);
  return keys;
}