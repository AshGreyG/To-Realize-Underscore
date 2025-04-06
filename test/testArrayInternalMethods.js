import QUnit from "qunit";
import _flatten from "../modules/_flatten.js";  // internal flatten

(function() {
  QUnit.module("Array Internal Methods", (hooks) => {
    QUnit.test("Internal Flatten From \`./modules/_flatten.js\`", (assert) => {
      assert.deepEqual(
        _flatten([1, [2, [3, [4]]]]),
        [1, 2, 3, 4],
        "🟥 Default internal flatten failed."
      );
      assert.deepEqual(
        _flatten([1, [2, [3, [4]]]], 2),
        [1, 2, 3, [4]],
        "🟥 Depth-limited internal flatten failed."
      );
      assert.deepEqual(
        _flatten([1, [2, {}], 3], Infinity, true),
        [],
        "🟥 Strict mode internal flatten failed."
      );
      assert.deepEqual(
        _flatten([1, [2, [3]], 4], 2, true),
        [3],
        "🟥 Strict mode internal flatten failed."
      );
      assert.deepEqual(
        _flatten({ 0: "a", 1: "b", length: 2 }),
        ["a", "b"],
        "🟥 Array-like objects internal flatten failed."
      );
    });
  });
}());