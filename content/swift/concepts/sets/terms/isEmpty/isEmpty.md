---
Title: '.isEmpty'
Description: 'Returns a Boolean indicating whether a Set is empty, based on whether it contains elements or not.'
Subjects:
  - 'Developer Tools'
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Collections'
  - 'iOS'
  - 'Sets'
  - 'Swift'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

**`.isEmpty`** is a built-in property in Swift that checks whether a set contains any elements. It returns a Boolean value: `true` if the set is empty and `false` otherwise, offering a simple and efficient way to check for an empty collection.

## Syntax

```pseudo
setName.isEmpty
```

- `setName`: Refers to the variable name of the set being evaluated. It represents the specific set whose emptiness is being checked.

## Example

This example code shows how to determine whether a set is empty using the `.isEmpty` property:

```swift
// Creating a set with elements
var numbers: Set<Int> = [1, 2, 3]

// Check if the set is empty
if numbers.isEmpty {
    print("This set is empty.")
} else {
    print("This set contains elements.")
}
```

This example results in the following output:

```shell
This set contains elements.
```
