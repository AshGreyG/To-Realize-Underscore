# Array Functions

Note, All array functions will also work on the **arguments** object.
However, Underscore functions are not designed to work on sparse arrays.

## `first`

+ `first(array, [n], [guard])`, alias: `head`, `take`
+ [Source](../modules/first.js)
+ Returns the first element of an **array**. Passing `n` will return the
  first **n** elements of the array.

  ``` javascript
  _.first();                       => undefined
  _.first(null);                   => undefined
  _.first(null, null, true);       => undefined
  _.first(null, 1, true);          => undefined
  _.first(null, 1, false);         => []
  _.first([1, 2, 3]);              => 1
  _.first([1, 2, 3], null);        => 1
  _.first([1, 2, 3, 4], 2);        => [1, 2]
  _.first([1, 2, 3, 4], 2, true);  => 1
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

## `rest`

+ `rest(array, [n], [guard])`, alias: `tail`, `drop`
+ [Source](../modules/rest.js)
+ Returns the rest of the elements in an array. Pass `n` to return the values
  of the array from that index onward.

  ``` javascript
  _.rest([1, 2, 3]);              => [2, 3]
  _.rest([1, 3, 4, 2], 0);        => [1, 3, 4, 2]
  _.rest([1, 3, 4, 4], 2, true);  => [3, 4, 4]
  _.rest([1, 3, 4, 4], 2, 1]);    => [3, 4, 4]
  ```

## `last`

+ `last(array, [n], [guard])`
+ [Source](../modules/last.js)
+ Returns the last element of an array. Passing `n` will return the last `n`
  elements of the array.

  ``` javascript
  _.last();                       => undefined
  _.last(null);                   => undefined
  _.last(null, null, true);       => undefined
  _.last(null, 1, true);          => undefined
  _.last(null, 1, false);         => []
  _.last([1, 2, 3]);              => 3
  _.last([1, 2, 3], null);        => 3
  _.last([1, 2, 3, 4], 2);        => [3, 4]
  _.last([1, 2, 3, 4], 2, true);  => 4
  ```

## `flatten`

+ `flatten(array, [depth])`
+ [Source](../modules/flatten.js)
+ Flattens a nested array. If you pass true or 1 as the depth, the array will 
  only be flattened a single level. Passing a greater number will cause the 
  flattening to descend deeper into the nesting hierarchy. Omitting the depth 
  argument, or passing false or Infinity, flattens the array all the way to 
  the deepest nesting level. 

  ``` javascript
  _.flatten([1, [2], [3, [[4]]]]);        => [1, 2, 3, 4];
  _.flatten([1, [2], [3, [[4]]]], true);  => [1, 2, 3, [[4]]];
  _.flatten([1, [2], [3, [[4]]]], 2);     => [1, 2, 3, [4]];
  ```