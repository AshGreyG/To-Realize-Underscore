declare var _: _.UnderscoreStatic;
export = _;
export as namespace _;

declare namespace _ {

  // Common interface between Arrays and jQuery objects
  interface List<T> {
    [index: number]: T;
    length: number;
  }

  interface Dictionary<T> {
    [index: string]: T;
  }

  interface Predicate<T> {
    (value: T): boolean;
  }

  type Collection<T> = List<T> | Dictionary<T>;

  type CollectionKey<V> 
    = V extends never
      ? any
      : V extends List<any>
        ? number
        : V extends Dictionary<any>
          ? string
          : V extends undefined
            ? undefined
            : never;

  type TypeOfList<V>
    = V extends never
      ? any
      : V extends List<infer T>
        ? T
        : never;

  type TypeOfDictionary<V, TDefault = never>
    = V extends never
      ? any
      : V extends Dictionary<infer T>
        ? T
        : TDefault;

  type TypeOfCollection<V, TObjectDefault = never>
    = V extends List<any>
      ? TypeOfList<V>
      : TypeOfDictionary<V, TObjectDefault>;

  /** This type utility returns the type of nested object */
  type DeepTypeOfCollection<V, P>
    = P extends [infer H, ...infer R]
      ? H extends keyof V
        ? DeepTypeOfCollection<V[H], R>
        : never
      : V;

  interface CollectionIterator<
    T extends TypeOfList<V> | TypeOfDictionary<V, any>,
    TResult,
    V = Collection<T>
  > {
    (element: T, key: CollectionKey<V>, collection: V): TResult;
  }

  interface UnderscoreStatic {

    /** Collection functions  */

    /**
     * Iterates over a `collection` of elements, yielding each in turn to an
     * `iteratee`. The `iteratee` is bound to the context object, if one is
     * passed
     * @param collection The collection of elements to iteratee over.
     * @param iteratee The iteratee to call for each element in `collection`.
     * @param context `this` object in `iteratee`, optional.
     * @returns The original collection.
     */
    each<V extends Collection<any>>(
      collection: V,
      iteratee: CollectionIterator<TypeOfCollection<V>, void, V>,
      context?: any
    ): V;
    
    /** @see each */
    forEach: UnderscoreStatic["each"];

    /** Object functions */

    /**
     * Retrieve all the names of the object's properties.
     * @param object Retrieve the key or property from this object.
     * @returns List of all the property names on `object`
     */
    keys(object: any): string[];

    /**
     * Retrieve all the names of object's own and inherited properties.
     * @param object Retrieve the key or property names from this object.
     */
    allKeys(object: any): string[];

    /**
     * Does the object contain the given key? Identical to 
     * `object.hasOwnProperty(key)`, but uses a safe reference to the
     * hasOwnProperty function, in case it's been overridden accidentally.
     * @param object Object to check for `key`.
     * @param key The key to check for on `object`.
     * @returns True if `key` is a property on `object`, otherwise false.
     */
    has(object: any, key: string): boolean;

    /**
     * Returns true if `object` is an Array.
     * @param object The object to check.
     * @returns True if `object` is an Array, otherwise false.
     */
    isArray(object: any): object is any[];

    /**
     * Returns true if `object` is a Function.
     * @param object The object to check.
     * @returns True if `object` is a Function, otherwise false.
     */
    isFunction(object: any): object is Function;

    /**
     * Returns true if the keys and values in `properties` are contained in
     * `object`.
     * @param object The object to check.
     * @param properties The `properties` to check for in `object`.
     * @returns True if all keys and values in `properties` are also in `object`.
     */
    isMatch(object: any, properties: any): boolean;
  }

  interface Underscore<T, V = T[]> {
    /**
     * Returns true if the keys and values in `properties` are contained in
     * wrapped object.
     * @param properties The `properties` to check for in wrapped object.
     * @returns True if all keys and values in `properties` are also in wrapped
     * object.
     */
    isMatch(properties: any): boolean;
  }


}