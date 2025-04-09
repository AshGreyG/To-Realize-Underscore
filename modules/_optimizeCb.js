/**
 * Internal function that returns an efficient (for current engine) version
 * of the passed-in callback, to be repeatedly applied in other Underscore
 * functions
 * 
 * @template {Function} T The type of the callback function
 * @template {ThisType} C The type of the context (`this`) object
 * 
 * @param {T} func The callback function to optimize
 * @param {C} [context] The context (`this` value) to bind to the callback. If
 * undefined, returns the original function modified.
 * @param {number} [argCount] The expected number of callback arguments
 * - If `null` or `undefined`, defaults to 3 (value, index, collection)
 * - Specified cases for 1, 3, and 4 arguments
 * - Falls back to generic `apply` for other counts
 * 
 * @returns { T | (context: C, ...params: any[]) => ReturnType<T>}
 * An optimized version of the callback:
 * - Preserves original behavior when no context is provided;
 * - Creates specified wrapper for common argument counts;
 * - Falls back to `apply` for uncommon cases.
 * 
 * @example
 * // No context optimization
 * const cb1 = optimizeCb(n => n * 2);
 * cb1(5);  // -> 10
 * 
 * // 1-argument case
 * const cb2 = optimizeCb(function(v) {
 *   return this.factor == null ? void 0 : v * this.factor;
 * }, { factor: 3 }, 1);
 * cb2(5);  // -> 15
 * 
 * // 3-arguments case (default)
 * const cb3 = optimizeCb(function(v, i, arr) {
 *   return `${this.prefix}${v}-${i}`;
 * }, { prefix: "item-" });
 * cb3("a", 1, ["a", "b"]); // -> "item-a-b"
 * 
 * @remarks
 * 
 * + Uses `Function.call` for specialized cases (better performance than `apply`)
 * + Omits 2-arguments case as it's not used in the library (to get better performance)
 * + Maintains exact argument passing semantic of original callback
 * + Particularly useful for iteration callbacks
 */
export default function optimizeCb(func, context, argCount) {
  if (context == void 0) return func;

  // This function use `argCount` to generate different optimized callback functions
  //   + Using Function.call is faster than Function.apply
  //   + Avoid unnecessary operations on `arguments`.

  switch (argCount == null ? 3 : argCount) {
    case 1 : return function(value) {
      return func.call(context, value);
    };
    case 3 : return function(value, index, collection) {
      return func.call(context, value, index, collection);
    };
    case 4 : return function(accumulator, value, index, collection) {
      return func.call(context, accumulator, value, index, collection);
    };
  }
  return function() {
    return func.apply(context, arguments);
  }
}