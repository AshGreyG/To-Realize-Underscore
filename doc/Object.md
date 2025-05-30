# Object functions

## `keys`

+ `keys(object)`
+ [Source](../modules/keys.js)
+ Retrieves all the names of the object's own enumerable properties.
  
  ``` javascript
  _.keys({ one: 1, two: 2, three: 3 }); => ["one", "two", "three"]
  ```

## `allKeys`

+ `allKeys(object)`
+ [Source](../modules/allKeys.js)
+ Retrieve all the names of object's own and inherited properties.

  ``` javascript
  function Storage(name) {
    this.name = name;
  }
  Storage.prototype.silly = true;
  _.allKeys(new Storage("Moe"));  => ["name", "silly"]
  ```

## `isArray`

+ `isArray(object)`
+ [Source](../modules/isArray.js)
+ Returns true if object is an Array. 
  
  ``` javascript
  _.isArray([1, 2, 3]); => true
  _.isArray("This");    => false
  ```

## `isArguments`

+ `isArguments(object)`
+ [Source](../modules/isArguments.js)
+ Returns true if object is an Arguments object. 

  ``` javascript
  _.isArguments([1, 2, 3]);                                   => false
  (function() { return _.isArguments(arguments); })(1, 2, 3); => true
  ```

## `isObject`

+ `isObject(object)`
+ [Source](../modules/isObject.js)
+ Returns true if value is an Object. Note that JavaScript arrays and functions are 
  objects, while (normal) strings and numbers are not.

  ``` javascript
  _.isObject({}); => true
  _.isObject(1);  => false
  ```

## `isFunction`

+ `isFunction(object)`
+ [Source](../modules/isFunction.js)
+ Returns true if **object** is a Function

  ``` javascript
  _.isFunction(() => {}); => true
  _.isFunction(alert);    => true
  ```

## `isMatch`

+ `isMatch(object, properties)`
+ [Source](../modules/isMatch.js)
+ Returns true if keys and values in `properties` are in `object`

  ``` javascript
  var storage = { opacity: 300, id: "123" };
  _.isMatch(storage, { id: "123" });  => true
  ```