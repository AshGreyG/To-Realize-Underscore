// This is current version (2025-03-23) of underscore.js
export var VERSION = "1.13.7";

// Establish the root object, `window`(`self`) in browser, `global` in the NodeJS
// or `this` in some virtual machines. We use `self` instead of `window` for
// `WebWorker` support.
export var root = 
  (typeof self == "object" && self.self === self && self) ||
  (typeof global == "object" && global.global === global && global) ||
  Function("return this")() ||
  {};

// Using one variable name rather than `*.*` can save bytes in the minified version:
export var ArrayProto = Array.prototype, ObjProto = Object.prototype;
export var SymbolProto = Symbol !== undefined ? Symbol.prototype : null;

// Create quick reference variables for speed access to core prototypes.
export var push = ArrayProto.push,
  slice = ArrayProto.slice,
  toString = ObjProto.toString,
  hasOwnProperty = ObjProto.hasOwnProperty;

// Modern feature detection.
export var supportsArrayBuffer = typeof ArrayBuffer !== "undefined",
  supportsDataView = typeof DataView !== "undefined";

// All ECMAScript 5+ native function implementations that we hope to use are declared
// here:
export var nativeIsArray = Array.isArray,
  nativeKeys = Object.keys,
  nativeCreate = Object.create,
  nativeIsView = supportsArrayBuffer && ArrayBuffer.isView;

// Create references to these builtin functions because we override them
export var _isNaN = isNaN, _isFinite = isFinite;

// Keys in IE < 9 that won't be iterated by `for key in ...`, such as `toString`,
// `valueOf` etc. We declare a object `{toString: null}`, we can check if this
// `toString` key of object can be enumerated.
// `Object.prototype.propertyIsEnumerable`: We can check this function in
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable
export var hasEnumBug = !{toString: null}.propertyIsEnumerable("toString");
export var nonEnumerableProps =
  ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable",
   "hasOwnProperty", "toLocaleString"];

// The largest integer that can be represented exactly.
export var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;