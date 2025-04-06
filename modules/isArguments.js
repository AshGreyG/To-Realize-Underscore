import tagTester from "./_tagTester.js";
import has from "./_has.js";

var isArguments = tagTester("Arguments");

// Define a fallback version of the method in browsers IE < 9, where
// there isn't explicit `Arguments` type. We can use the `callee` 
// property to check if an object is `Arguments`.
(function() {
  if (!isArguments(arguments)) {
    isArguments = function(obj) {
      return has(obj, "callee");
    };
  }
}());

export default isArguments;