---
Title: 'Sets'
Description: 'Store unique elements of the same data type.'
Subjects:
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'Data Types'
  - 'Variables'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

In Swift, a **set** is used to store unique elements of the same data type.

## Syntax

```pseudo
var setName = Set<Type>()

var setName: Set = [value1, value2, ...]
```

`Type` refers to the [data type](https://www.codecademy.com/resources/docs/swift/data-types) of the values to be stored in the set.

To create a set populated with values, use the `Set` keyword before the assignment operator. The values of the set must be contained within brackets `[]` and separated with commas `,`.

## Empty Sets

An empty set is a set that contains no values inside.

```swift
var team = Set<String>()

print(team)
// Output: []
```

## Iterating Over a Set

A `for`-`in` loop can be used to iterate over each item in a set.

```swift
var recipe: Set = ["Chocolate chips", "Eggs", "Flour", "Sugar"]

for ingredient in recipe {
  print("Include \(ingredient) in the recipe.")
}
```

## `.isEmpty` Property

Use the built-in property `.isEmpty` to check if a set has no values contained in it.

```swift
var emptySet = Set<String>()

print(emptySet.isEmpty)  // Prints: true

var populatedSet: Set = [1, 2, 3]

print(populatedSet.isEmpty) // Prints: false
```

## `.count` Property

The property `.count` returns the number of elements contained within a set.

```swift
var band: Set = ["Guitar", "Bass", "Drums", "Vocals"]

print("There are \(band.count) players in the band.")
// Output: There are 4 players in the band.
```

### Methods

There are many set manipulation methods available in the Swift Standard Library, including generic `Collection`-based methods. Some of these include testing the contents of sets (e.g. `.contains()` and `.isEmpty`) while others can modify or manipulate the set entirely (e.g., `.map()`, `.reduce()`, and `.sorted()`). There is also a list of methods applicable to a pair of sets (e.g., `.intersection()` or `.subtracting()`).

Below are some methods available for sets:
