# Array Functions

Note, All array functions will also work on the **arguments** object.
However, Underscore functions are not designed to work on sparse arrays.

## `first`

+ `first(array, [n], [guard])`
+ [Source](../modules/first.js)
+ Returns the first element of an **array**. Passing `n` will return the
  first **n** elements of the array.

  ``` javascript
  first();                       => undefined
  first(null);                   => undefined
  first(null, null, true);       => undefined
  first(null, 1, true);          => undefined
  first(null, 1, false);         => []
  first([1, 2, 3]);              => 1
  first([1, 2, 3], null);        => 1
  first([1, 2, 3, 4], 2);        => [1, 2]
  first([1, 2, 3, 4], 2, true);  => 1
  ```

## `initial`

+ `initial(array, [n], [guard])`
+ [Source](../modules/initial.js)
+ Returns everything but the last entry of the array. Especially useful
  on the arguments object. Pass `n` to exclude the last **n** elements
  from the result.

  ``` javascript
  _.initial([1, 2, 3, 4]);          => [1, 2, 3]
  _.initial([1, 2, 3, 4], 2);       => [1, 2]
  _.initial([1, 2, 3, 4], 2, true); => [1, 2, 3]
  ```