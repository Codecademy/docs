---
Title: 'Subscript'
Description: 'Accesses or modifies the value associated with a specific key in a dictionary.'
Subjects:
  - 'Computer Science'
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Dictionary'
  - 'Methods'
  - 'Properties'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---


**Subscript** in Swift is a shortcut for accessing elements of a collection, list, or sequence. It is syntactic sugar that allows the use of the subscript syntax `[]` to access elements. Subscripts can also be defined in custom types, with syntax similar to computed properties. Multiple subscripts can be defined with different input parameters and return types.


## Syntax

The syntax for defining a subscript in Swift is as follows:

```pseudo
subscript(index: Int) -> Int {
    get {
        // Return an appropriate subscript value here.
    }
    set(newValue) {
        // Perform a suitable setting action here.
    }
}
```


- `subscript(index: Int) -> Int`: This defines a subscript that takes an `Int` parameter (index) and returns an `Int` value.
- `get`: The getter block should return the value corresponding to the `index`.
- `set`: The setter block should set a new value at the specified `index`. 
## Example

Here is an example of a subscript in Swift:

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

This example creates a `TimesTable` struct with a subscript that returns the product of the `multiplier` and the `index`. The subscript is accessed using the `[]` syntax to compute the result.

## Summary

- **Subscript** in Swift is a shortcut to access the elements of a collection, list, or sequence.  
- You can define subscripts in your own custom types, and the syntax is similar to computed properties.
- Subscripts can be used with different types, such as classes, structures, and enumerations.  
- Subscripts can be used to provide a convenient way to access the elements of a collection, list, or sequence.
- For more information, you can refer to the [Swift documentation on subscripts](https://docs.swift.org/swift-book/LanguageGuide/Subscripts.html).
