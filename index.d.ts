declare namespace _ {

  // Common interface between Arrays and jQuery objects
  interface List<T> {
    [index: number]: T;
    length: number;
  }

  interface Dictionary<T> {
    [index: string]: T;
  }

  type Collection<T> = List<T> | Dictionary<T>;
}