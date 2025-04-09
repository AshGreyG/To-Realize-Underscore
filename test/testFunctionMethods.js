import QUnit from "qunit";
import restArguments from "../modules/restArguments.js";

(function() {
  QUnit.module("Function Methods", (hooks) => {
    QUnit.test("Rest Arguments Function From \`./modules/restArguments.js", (assert) => {
      assert.deepEqual(
        (restArguments((a, rest) => [a, rest])(1, 2, 3)),
        [1, [2, 3]],
        "🟥 Checking no startIndex failed."
      );
      assert.deepEqual(
        (restArguments((a, b, c, rest) => [a + b + c, rest])(1, 2, 3, 4, 5, 6)),
        [6, [4, 5, 6]],
        "🟥 Checking automatic wrapping failed."
      );
      assert.deepEqual(
        (restArguments((a, b, rest) => [a, b, rest])(1, 2, 3, 4, 5)),
        [1, 2, [3, 4, 5]],
        "🟥 Checking explicit start index failed."
      );
    })
  })
}());