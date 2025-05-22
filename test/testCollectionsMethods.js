import QUnit from "qunit";
import each from "../modules/each.js";

(function() {
  QUnit.module("Collections Methods", (hooks) => {
    QUnit.test("each From \`./modules/each.js\`", (assert) => {
      assert.ok(
        each([1, 2, 3], console.log),
        "🟥 each function cannot be used for array."
      );
      // console.log is optimized as console.log(value, index, array)
      // so it will output the syntax like 1 0 [1, 2, 3]
      assert.ok(
        each({ length: 3, 0: "AshGrey", 1: "Huaier", 2: true }, console.log),
        "🟥 each function cannot be used for array-like object."
      );
      assert.ok(
        each({ foo: "Test", bar: 3 }, console.log),
        "🟥 each function cannot be used for normal object as value iteration."
      );
    });
  });
})();