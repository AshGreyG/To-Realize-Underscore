/**
 * This function returns the same value that is used as the argument
 * 
 * @template T The type of input value
 * 
 * @param {T} value
 * 
 * @returns T
 * 
 * @example
 * var storage = { capacity: 3000 };
 * console.log(storage === identity(storage));  // => true
 */
export default function identity(value) {
  return value;
}