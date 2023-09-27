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

**Arrays** are ordered lists of values, all of the same [data type](https://www.codecademy.com/resources/docs/swift/data-types) and contained in the same [structure](https://www.codecademy.com/resources/docs/swift/structures). Swift, a very type-safe language, will throw compiler errors if values of different types are stored in a single array (e.g., a `String` in an `Int` array). However, values can be repeated; every occurence of the same value gets stored in a different location.

## Creating Arrays

Arrays can be created in several ways, each with a specific use case.

An empty array can be declared and initialized with the following syntax:

```pseudo
var arrayName = [Type]()
```

The above syntax is useful if elements are not supposed to be added yet, or the size of the array has not been determined.

Arrays can also be initialized with a given size and default values. For example, to store ten values for a Battleship game with a default location marker "U" (for "Unchecked"), an array can be initialized like this:

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

> **Note:** If an array is declared as a constant, using `let`, then it is immutable: its size or values of its members cannot change. This is especially useful if the data stored is to be protected from being manipulated later on in the program.

## Accessing Arrays

Arrays can be accessed using subscript notation. Since all arrays are zero-indexed, the first index in it will be `arrayName[0]`, and the last element will be one less than the [`.count`](https://www.codecademy.com/resources/docs/swift/dictionaries/count) property of the array.

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

Values or elements of an array can be reassigned by accessing it through its index.

```swift
statesVisited[2] = "MI"
// ["NY", "CA", "MI", "FL"]
```

## Iterating Over Arrays

To iterate over the entire contents of an array, a `for-in` loop is commonly used.

```swift
var topBabyNames = ["Liam", "Jackson"]

for name in topBabyNames {
  print("\(name)is the coolest name.")
}
// Output:
// Liam is the coolest name.
// Jackson is the coolest name.
```

> **Note:** Alternatively, the [`.forEach()`](https://www.codecademy.com/resources/docs/swift/arrays/forEach) method can be used to iterate over an array.

## Array Properties, Methods, and Testing

Built-in array properties in the Swift Standard Library include `.first`, `.last`, and `.randomElement`. These are used to access certain information within an array.

> **Note:** If no values exist in the array, these properties will return `nil`.

```swift
print("The first and last states I've visited are \(statesVisited.first) and \(statesVisited.last), respectively.")
// Output: The first and last states I've visited are NY and FL, respectively.

print("To make life interesting, next week I'll fly to \(statesVisited.randomElement).")
```

### Methods

There are many array manipulation methods available in the Swift Standard Library, including generic collection-based methods. Some of these include testing the contents of arrays (e.g. `contains()` and `.isEmpty`) while others can modify or manipulate the array entirely (e.g., `map()`, `reduce()`, and `sort()`).

Below are some methods available for arrays:
