# Function functions

## `restArguments`

+ `restArguments(function, [startIndex])`
+ [Source](../modules/restArguments.js)
+ Returns a version of the function that, when called, receives all arguments 
  from and beyond startIndex collected into a single array. If you don’t pass 
  an explicit startIndex, it will be determined by looking at the number of 
  arguments to the function itself. Similar to ES6’s rest parameters syntax. 

  ``` javascript
  // Basic usage (similar to ES6 rest arguments)
  const fn1 = _.restArguments(function(a, rest) {
    return [a, rest];
  });
  // Custom start index
  const fn2 = _.restArguments(function(a, b, rest) {
    return [a, b, rest];
  }, 2);
  
  // Automatic wrapping
  const fn3 = _.restArguments(function(a, b, c, rest) {
    return [a + b + c, rest];
  });

  fn1(1, 2, 3);           => [1, [2, 3]]
  fn2(1, 2, 3, 4);        => [1, 2, [3, 4]]
  fn3(1, 2, 3, 4, 5, 6);  => [6, [4, 5, 6]]
  ```