import optimizeCb from "./_optimizeCb.js";
import isArrayLike from "./_isArrayLike.js";
import keys from "./keys.js";

/**
 * The cornerstone for collection functions, an `each` implementation,
 * aka `forEach`. Handles raw objects in addition to array-likes. Treats
 * all sparse array-likes as if they were dense
 * 
 * @param {any} obj The object that will be iterated by `iteratee`.
 * @param {Function} iteratee The iteration function.
 * @param {ThisType} [context] The context for `iteratee`.
 * 
 * @returns {any}
 */
export default function each(obj, iteratee, context) {
  iteratee = optimizeCb(iteratee, context);
  var i, length;
  if (isArrayLike(obj)) {
    for (i = 0, length = obj.length; i < length; i++) {
      iteratee(obj[i], i, obj); // default optimized callback function, with 3 arguments
    }
  } else {
    var _keys = keys(obj);
    for (i = 0, length = _keys.length; i < length; i++) {
      iteratee(obj[_keys[i]], _keys[i], obj);
    }
  }
  return obj;

  // This function returns the original obj for chaining
}