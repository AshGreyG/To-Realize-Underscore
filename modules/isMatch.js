import keys from "./keys.js";

/**
 * Tells you if the keys and values in `properties` are contained in `object`
 * 
 * @param {any} object The object that to check if keys and values in properties are
 * contained in it.
 * @param {any} properties The properties to check for in the wrapped object.
 * 
 * @returns {boolean} True if all keys and values in `properties` are also in the
 * wrapped object.
 */
export default function isMatch(object, properties) {
  var _keys = keys(properties), length = _keys.length;
  if (object == null) return !length;
  var obj = Object(object);
  
  for (var i = 0; i < length; i++) {
    var key = _keys[i];
    if (properties[key] != obj[key] || !(key in obj)) {
      return false;
    }
  }
  return true;
}