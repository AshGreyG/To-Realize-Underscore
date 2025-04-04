/**
 * @description Internal helper to generate a function to obtain property
 * `key` from `obj`
 * @param {string | number | symbol} key The parameter of returned function,
 * which is the key that this function wants to query
 * @returns {(obj: any) => any | undefined} The returned function obtaining
 * the value according to the key
 */
export default function shallowProperty(key) {
  return function(obj) {
    return obj == null ? void 0 : obj[key];
  }
}