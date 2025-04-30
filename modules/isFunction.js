import tagTester from "./_tagTester.js";
import { root } from "./_setup.js";

var isFunction = tagTester("Function");

// `tagTester` function runs slower than using `typeof` directly.

// Optimize `isFunction` if appropriate. Work around some `typeof` bugs in old v8,
// IE11, Safari 8, and PhantomJS

var nodeList = root.document && root.document.childNotes;
if (
  typeof /./ != "function" &&       // 
  typeof Int8Array != "object" && 
  typeof nodeList != "function"
) {
  isFunction = function(obj) {
    return typeof obj == "function" || false;
  };
}

export default isFunction;