# Utility functions

## `identity`

+ `identity(value)`
+ [Source](../modules/identity.js)
+ Returns the same value that is used as the argument, this function looks
  useless, but is used throughout Underscore as a default iteratee

  ``` javascript
  var storage = { capacity: 3000 };
  console.log(storage === _.identity(storage)); => true
  ```