---
Title: 'Arrays'
Description: 'Arrays are ordered collections of values that are all of the same type, contained in the same structure.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Arrays'
  - 'Data Structures'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**Arrays** are ordered lists of values, all of the same [data type](https://www.codecademy.com/resources/docs/swift/data-types), and contained in the same [structure](https://www.codecademy.com/resources/docs/swift/structures). Swift, being a very type-safe language, will throw compiler errors if values of different types are stored in an array (e.g., a `String` in an `Int` array). Values can, however, be repeated in an array as every occurence of the same value is stored in a different location.

## Creating Arrays

Arrays can be created in several ways, each with a specific use case.

An empty array can be declared and initalized with the following syntax:

```pseudo
var arrayName = [Type]()
```

This is useful if elements are not to be added yet, or the size of the array has not been determined.

Arrays can also be initialized with a given size and default values. For example, to store 10 values for a Battleship game with a default location marker "U" for "Unchecked", an array can be initialized like this:

```swift
var alphaRow = [Character](repeating: "U", count: 10)
// Creates: ["U", "U", "U", "U", "U", "U", "U", "U", "U", "U"]
```

Swift also allows different values to be assigned within the array directly at initialization. It will even perform type inferencing, enabling the code to be shortened.

```swift
// Type declared
var statesVisited: [String] = ["NY", "CA", "TX", "FL"]
// Type inferenced
var statesToVisit = ["ME", "ID", "NV", "AK"]
```

> **Note:** If an array is declared as a constant, using `let`, then the array is immutable: its size or values of its members cannot be changed. This is especially useful if the data being stored is to be protected from being manipulated later on in the program.

## Accessing Arrays

Arrays can be accessed using subscript notation. Since all arrays are zero-indexed, the first index in the array will be `arrayName[0]` and the last element will be one less than the [`.count`](https://www.codecademy.com/resources/docs/swift/dictionaries/count) property of the array.

```swift
var statesVisited: [String] = ["NY", "CA", "TX", "FL"]
print("Yesterday I went to \(statesVisited[0]).")
// Output: Yesterday I went to NY.

var statesToVisit = ["ME", "ID", "NV", "AK"]
print("Tomorrow I'm headed to \(statesToVisit[1])!")
// Output: Tomorrow I'm headed to NV!
```

Attempting to access an element that doesn't exist through subscript notation will result in a runtime error.

```swift
print("After Nevada, I'm going to head to \(statesToVisit[4]).")
// Runtime Error: Index out of range
```

Values in an array can be directly reassigned by accessing the element at a specific index.

```swift
statesVisited[2] = "MI"
// ["NY", "CA", "MI", "FL"]
```

## Iterating Over Arrays

To iterate over the entire contents of an array in Swift use a `for-in` loop.

```swift
for name in topBabyNames {
    print("\(name)is the coolest name.")
}
// Output:
// Liam is the coolest name.
// Jackson is the coolest.
// Olivia is the coolest name.
```

A second technique is to call the `forEach()` method. This method will operate on all elements of the array and cannot be escaped using a `break` or `continue` call, evening returning a value in the body of the closure will only return that value out of the body and not the declaring method body. The `forEach()` method is commonly used when all elements are to be manipulated by the loop or to display the purpose of the loop to others reading the code.

```swift
topBabyNames.forEach { name in
  print("\(name) is the coolest name.")
}
// Same as above
```

## Array Properties, Methods, and Testing

Built-in array properties in the Swift Standard Library include `.first`, `.last`, and `.randomElement`. These are used to access certain information within an array.

> **Note:** If no values exist in the array, these properties will return `nil`.

```swift
print("The first and last states I've visited are \(statesVisited.first) and \(statesVisited.last), respectively.")
// Output: The first and last states I've visited are NY and FL, respectively.

print("To make life interesting, next week I'll fly to \(statesVisited.randomElement).")
```

### Methods

There are many array manipulation methods available in the Swift Standard Library, including many more generic Collection based methods. Some of these include testing the contents of arrays (e.g. `contains()` and `.isEmpty`) while others can modify or manipulate the array entirely (e.g. `map()`, `reduce()`, and `sort()`).

Below are some methods available for arrays:

<!-- TODO: Include properties here as well.  -->
