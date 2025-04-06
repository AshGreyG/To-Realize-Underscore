import { toString } from "./_setup.js";

/**
 * Creates a type-checking function that tests whether an object's internal [[Class]]
 * matches the specified type tag. This is a robust alternative to `typeof` and
 * `instanceof` checks
 * 
 * @template T The expected object type used for TypeScript type inference
 * 
 * @param {string} name The type name to test against (e.g. `Array`, `RegExp` etc.)
 * @returns {(obj: any) => obj is T} A type predicate function that returns
 * - `true` if the object's internal [[Class]] matches the specified tag
 * - `false` otherwise
 * 
 * @example
 * // Create an array checker
 * const isArray = tagTester("Array");
 * isArray([]); // -> true
 * isArray({}); // -> false
 * 
 * @remarks
 * Use `Object.prototype.toString()` internally for reliable type checking. Works
 * with built-in types like `Array`, `Date`, `RegExp` etc.
 * 
 * @see toString Used internally for type checking.
 */
export default function tagTester(name) {
  var tag = "[object " + name + "]";
  return function(obj) {
    return toString.call(obj) === tag;
  }
}