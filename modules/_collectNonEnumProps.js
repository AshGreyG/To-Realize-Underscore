import { nonEnumerableProps, ObjProto } from "./_setup.js";
import isFunction from "./isFunction.js";
import has from "./_has.js";

/**
 * Internal helper function to create a simple lookup structure.
 * `collectNonEnumProps` used to depend on `_.contains`, but this led to 
 * circular imports. `emulatedSet` is a one-off solution that only works
 * for arrays or strings.
 * 
 * @param {any[]} keys Input array used to emulate the set, every
 * element in it is recorded as `true`.
 * 
 * @returns {{ contains: (key: any) => boolean; push: (key: any) => number}}
 * 
 * @example
 * var test = emulatedSet([1, 2, 3]);
 * 
 * console.log(test.contains(3)); // => true
 * console.log(test.contains(4)); // => false
 * console.log(test.push(4));     // => 4
 * console.log(test.contains(4)); // => true
 */
function emulatedSet(keys) {
  var hash = {};
  for (var l = keys.length, i = 0; i < l; ++i) hash[keys[i]] = true;
  return {
    contains: function(key) { return hash[key] === true; },
    push: function(key) {
      hash[key] = true;
      return keys.push(key);
    }
  }

  // This is a clojure, the returned object has access to variable `keys`
}

/**
 * Internal helper function. Check `keys` for the presence of keys in IE < 9
 * that won't be iterated by `for key in ..` and thus missed. Extends `keys`
 * in place if needed. This is a side effect function, it changes the input.
 * 
 * @param {object} obj
 * @param {any[] | { contains: (key: any) => boolean; push: (key: any) => number }} keys
 */
export default function collectNonEnumProps(obj, keys) {
  keys = emulatedSet(keys);
  var nonEnumIndex = nonEnumerableProps.length;
  var constructor = obj.constructor;
  var proto = (isFunction(constructor) && constructor.prototype) || ObjProto;

  var prop = "constructor";
  if (has(obj, prop) && !keys.contains(prop)) {
    keys.push(prop);
  }

  while (nonEnumIndex--) {
    prop = nonEnumerableProps[nonEnumIndex];
    if (prop in obj && obj[prop] !== proto[prop] && !keys.contains(prop)) {
      // - prop in obj : Property is in object or its prototype chain;
      // - obj[prop] !== proto[prop] : Object has overwritten the property;
      // - !keys.contains(prop) : Property is not in object.

      keys.push(prop);
    }
  }
}