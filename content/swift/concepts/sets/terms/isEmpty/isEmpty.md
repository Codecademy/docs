---
Title: '.isEmpty'
Description: 'Checks if a Swift Set is empty, returns `true` if it has no elements, and `false` otherwise.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
  - 'Developer Tools'
Tags:
  - 'Collections'
  - 'iOS'
  - 'Sets'
  - 'Swift'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
  - 'paths/computer-science'
---

**`.isEmpty`** is a built-in property in Swift that determines whether the set contains any elements. It returns `true` if the set is empty and `false` otherwise. It provides a simple and efficient way to determine whether there are any elements in the collection.

## Syntax

```pseudo
setName.isEmpty
```

## Example

This example code shows how to determine whether a Set in Swift is empty using the `.isEmpty` property.

```swift
// Creating a set with elements
var numbers: Set<Int> = [1, 2, 3]

// Check if the set is empty 
of numbers.isEmpty {
    print("This set is empty.")
} else {
    print("This set contains elements.")
}
```

This example results in the following output:

```shell
This set contains elements.
```
