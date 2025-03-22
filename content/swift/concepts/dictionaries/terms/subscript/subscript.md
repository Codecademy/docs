---
Title: 'Subscript'
Description: 'Accesses or modifies the value associated with a specific key in a dictionary.'
Subjects:
  - 'Computer Science'
  - 'Mobile Development'
Tags:
  - 'Dictionary'
  - 'Elements'
  - 'Methods'
  - 'Properties'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**Subscript** in Swift is a shortcut for accessing elements of a [collection](https://www.codecademy.com/resources/docs/swift/collections), list, or sequence. It is syntactic sugar that allows the use of the subscript syntax `[]` to access elements. Subscripts can also be defined in custom types, with syntax similar to computed properties. Multiple subscripts can be defined with different input parameters and return types.

## Syntax

The syntax for defining a subscript in Swift is as follows:

```pseudo
subscript(index: Int) -> Int {
  get {
    // Return an appropriate subscript value here
  }

  set(newValue) {
    // Perform a suitable setting action here
  }
}
```

- `subscript(index: Int) -> Int`: This defines a subscript that takes an `Int` parameter (`index`) and returns an `Int` value.
- `get`: The getter block should return the value corresponding to the `index`.
- `set`: The setter block should set a new value at the specified `index`.

## Example

This example creates a `TimesTable` [structure](https://www.codecademy.com/resources/docs/swift/structures) with a subscript that returns the product of the `multiplier` and the `index`. The subscript is accessed using the `[]` syntax to compute the result:

```swift
struct TimesTable {
  let multiplier: Int
  subscript(index: Int) -> Int {
    return multiplier * index
  }
}

let threeTimesTable = TimesTable(multiplier: 3)
print("Six times three is \(threeTimesTable[6])")
```

The above code produces the following output:

```shell
Six times three is 18
```
