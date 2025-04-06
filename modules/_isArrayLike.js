import createSizePropertyCheck from "./_createSizePropertyCheck.js";
import getLength from "./_getLength.js";

// Internal helper for collection methods to determine whether a collection
// should be iterated as an array or as an object.
export default createSizePropertyCheck(getLength);