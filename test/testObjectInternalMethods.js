import QUnit from "qunit";
import _createSizePropertyCheck from "../modules/_createSizePropertyCheck.js";
import _getLength from "../modules/_getLength.js";
import _has from "../modules/_has.js";
import _isArrayLike from "../modules/_isArrayLike.js";
import _tagTester from "../modules/_tagTester.js";
import collectNonEnumProps from "../modules/_collectNonEnumProps.js";

(function() {
  QUnit.module("Object Internal Methods", (hooks) => {
    QUnit.test("Internal Create Size Property Check From \`./modules/_createSizePropertyCheck.js\`", (assert) => {
      const checkSize = _createSizePropertyCheck(collection => collection.size);
      assert.equal(
        checkSize(new Set([1, 2])),
        true,
        "🟥 Checking size property for Set failed."
      );
      assert.equal(
        checkSize(new Map()),
        true,
        "🟥 Checking size property for Map failed."
      );
      assert.equal(
        checkSize({ size: 2 }),
        true,
        "🟥 Checking size property for user defined object failed."
      );
      assert.equal(
        checkSize({ size: Math.pow(2, 53) }),
        false,
        "🟥 Checking size property for out-of-bound (greater than 2 ^ 53) failed."
      );
      assert.equal(
        checkSize({ size: -1 }),
        false,
        "🟥 Checking size property for out-of-bound (less than 0) failed."
      );
    });

    QUnit.test("Internal Get Length From \`./modules/_getLength.js\`", (assert) => {
      assert.equal(
        _getLength([1, 2 ,3]),
        3,
        "🟥 Get length from a normal array failed."
      );
      assert.equal(
        _getLength("AshGrey Loves Huaier"),
        20,
        "🟥 Get length from a normal string failed."
      );
      assert.equal(
        _getLength([]),
        0,
        "🟥 Get length from an empty array failed."
      );
      assert.equal(
        _getLength(""),
        0,
        "🟥 Get length from an empty string failed."
      );
      assert.equal(
        _getLength(null),
        void 0,
        "🟥 Get length from null failed."
      );
      assert.equal(
        _getLength(undefined),
        void 0,
        "🟥 Get length from undefined failed."
      );
    });

    QUnit.test("Internal Has Some Property From \`./modules/_has.js\`", (assert) => {
      const sym = Symbol("sym");
      assert.equal(
        _has({ foo: "bar" }, "foo"),
        true,
        "🟥 Has for normal object failed."
      );
      assert.equal(
        _has({}, "toString"),
        false,
        "🟥 Has for prototype chain failed."
      );
      assert.equal(
        _has(null, "test"),
        false,
        "🟥 Has for null failed."
      );
      assert.equal(
        _has(undefined, "test"),
        false,
        "🟥 Has for undefined failed."
      );
      assert.equal(
        _has({ [sym]: true }, sym),
        true,
        "🟥 Has for symbol property failed."
      );
    });

    // _isArrayLike unit test is included in _createSizePropertyCheck unit test.
    // _shallowProperty unit test is similar, it's included in _getLength unit test.

    QUnit.test("Internal Tag Tester From \`./modules/_tagTester.js\`", (assert) => {
      const isArray     = _tagTester("Array");
      const isFunction  = _tagTester("Function");
      const isError     = _tagTester("Error");
      const isBoolean   = _tagTester("Boolean");
      const isNumber    = _tagTester("Number");
      const isBigInt    = _tagTester("BigInt");
      const isString    = _tagTester("String");
      const isDate      = _tagTester("Date");
      const isRegExp    = _tagTester("RegExp");
      const isObject    = _tagTester("Object");
      const isSymbol    = _tagTester("Symbol");

      assert.equal(
        isArray([]),
        true,
        "🟥 Tag tester for array failed to match expectation."
      );
      assert.equal(
        isFunction(function test() {}),
        true,
        "🟥 Tag tester for function expression failed to match expectation."
      );
      assert.equal(
        isFunction(() => {}),
        true,
        "🟥 Tag tester for anonymous function failed to match expectation."
      );
      assert.equal(
        isError(new Error("This is an error")),
        true,
        "🟥 Tag tester for Error object failed to match expectation."
      );
      assert.equal(
        isBoolean(true),
        true,
        "🟥 Tag tester for Boolean object failed to match expectation."
      );
      assert.equal(
        isNumber(200),
        true,
        "🟥 Tag tester for Number object failed to match expectation."
      );
      assert.equal(
        isBigInt(2300n),
        true,
        "🟥 Tag tester for BigInt object failed to match expectation."
      );
      assert.equal(
        isString("this is a string"),
        true,
        "🟥 Tag tester for String object failed to match expectation."
      );
      assert.equal(
        isDate(new Date()),
        true,
        "🟥 Tag tester for Date object failed to match expectation."
      );
      assert.equal(
        isRegExp(/\d{12}/),
        true,
        "🟥 Tag tester for RegExp object failed to match expectation."
      );
      assert.equal(
        isObject({ normal: "object" }),
        true,
        "🟥 Tag tester for a normal object failed to match expectation."
      );
      assert.equal(
        isSymbol(Symbol(12)),
        true,
        "🟥 Tag tester for symbol failed to match expectation."
      );
    });

    QUnit.test("Internal Collect Non-Enumerable Properties From \`./modules/_collectNonEnumProps.js\`", (assert) => {
      let keys = collectNonEnumProps({}, ["alice", "bob", "charlie"]);
      assert.equal(
        keys.contains("alice"),
        true,
        "🟥 User-added properties are failed to add to the object."
      );
      let objectProtoKeys = collectNonEnumProps(Object.prototype, []);
      assert.equal(
        objectProtoKeys.contains("constructor"),
        true,
        "🟥 Constructor of object prototype is failed to add to the object."
      );
    });
  });
}());