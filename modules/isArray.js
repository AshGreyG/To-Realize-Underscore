import { nativeIsArray } from "./_setup.js";
import tagTester from "./_tagTester.js"

export default nativeIsArray || tagTester("Array");