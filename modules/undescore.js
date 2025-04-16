import { VERSION } from "./_setup.js";

// If underscore is called as a function, it returns a wrapped object that
// can be used OO-style. This wrapper holds altered versions of all functions
// added through `_.mixin`. Wrapped objects may be chained.
export default function _(obj) {
  if (obj instanceof _) return obj; // Avoid second wrapping
  if (!(this instanceof _)) return new _(obj);
  this._wrapped = obj;
}

_.VERSION = VERSION;

_.prototype.value = function() {
  return this._wrapped;
}

_.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
_.prototype.toString = function() {
  return String(this._wrapped);
}

// 1. Functional Programming Style: _.map(arr, fn);
// 2. OO-Style: _(arr).map(fn);
//    Using OO-Style can chain the wrapped objects:
//    _([1, 2, 3])
//      .filter(x => x > 1)
//      .map(x => x * 2)
//      .value()