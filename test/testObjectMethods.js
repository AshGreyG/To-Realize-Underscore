import QUnit from "qunit";
import isFunction from "../modules/isFunction.js";

(function() {
  QUnit.module("Object Methods", (hooks) => {
    QUnit.test("IsFunction From \`.modules/isFunction.js\`", (assert) => {
      assert.equal(
        isFunction(() => {}),
        true
      );
      assert.equal(
        isFunction(assert),
        true
      );
      assert.equal(
        isFunction(function() {}),
        true
      );
    })
  })
})