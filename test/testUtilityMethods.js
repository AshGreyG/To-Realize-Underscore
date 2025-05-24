import QUnit from "qunit";
import identity from "../modules/identity.js";

(function() {
  QUnit.module("Utility Methods", (hooks) => {
    QUnit.test("identity From \`./modules/identity.js\`", (assert) => {
      var storage = { capacity: 3000 };
      assert.equal(
        storage === identity(storage),
        true,
        "🟥 Identity function cannot return same value of an object."
      );
    });
  });
})();