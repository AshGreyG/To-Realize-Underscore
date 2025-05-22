# Collections Functions

## `each`

+ `each(list, iteratee, [context])`, alias: `forEach`
+ [Source](../modules/each.js)
+ Iterates over a list of elements, yielding each in turn to an iteratee function. 
  The iteratee is bound to the context object, if one is passed. Each invocation 
  of iteratee is called with three arguments: (element, index, list). If list is 
  a JavaScript object, iteratee's arguments will be (value, key, list). Returns 
  the list for chaining.

  ``` javascript
  _.each([1, 2, 3], console.log);
  // 1 0 [1, 2, 3]
  // 2 1 [1, 2, 3]
  // 3 2 [1, 2, 3]

  _.each({ length: 3, 0: "AshGrey", 1: "Huaier", 2: true }, console.log);
  // AshGrey 0 { '0': 'AshGrey', '1': 'Huaier', '2': true, length: 3 }
  // Huaier 1 { '0': 'AshGrey', '1': 'Huaier', '2': true, length: 3 }
  // true 2 { '0': 'AshGrey', '1': 'Huaier', '2': true, length: 3 }

  _.each({ foo: "Test", bar: 3 }, console.log);
  // Test foo { foo: 'Test', bar: 3 }
  // 3 bar { foo: 'Test', bar: 3 }
  ```