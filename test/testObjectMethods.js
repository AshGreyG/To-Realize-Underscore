import QUnit from "qunit";
import isFunction from "../modules/isFunction.js";
import keys from "../modules/keys.js";
import allKeys from "../modules/allKeys.js";

(function() {
  QUnit.module("Object Methods", (hooks) => {
    QUnit.test("isFunction From \`.modules/isFunction.js\`", (assert) => {
      assert.equal(
        isFunction(() => {}),
        true,
        "🟥 Array function is judged as non-function incorrectly."
      );
      assert.equal(
        isFunction(console.log),
        true,
        "🟥 Native function is judged as non-function incorrectly."
      );
      assert.equal(
        isFunction(function() {}),
        true,
        "🟥 Empty function is judged as non-function incorrectly."
      );
    });
    QUnit.test("keys From \`.modules/keys.js\`", (assert) => {
      assert.deepEqual(
        keys(3),
        [],
        "🟥 Non-object is considered having some properties."
      );
      assert.deepEqual(
        keys({}),
        [],
        "🟥 Empty object is considered having some properties."
      );
      assert.deepEqual(
        keys({ foo: 11, bar: "test" }),
        ["foo", "bar"],
        "🟥 Normal object is got the properties incorrectly."
      );
      assert.deepEqual(
        keys("12"),
        [],
        "🟥 String should not be considered as object."
      );

      function Storage(name) {
        this.name = name;
      }
      Storage.prototype.silly = true;
      assert.deepEqual(
        keys(new Storage()),
        ["name"],
        "🟥 If they are not equal, then the \`nativeKeys\` doesn't take effect."
      );
    });
    QUnit.test("allKeys From \`./modules/allKeys.js\`", (assert) => {
      function Storage(name) {
        this.name = name;
      }
      Storage.prototype.silly = true;
      assert.deepEqual(
        allKeys(new Storage("Moe")),
        ["name", "silly"],
        "🟥 allKeys cannot get the prototype properties."
      );
    })
  });
})();