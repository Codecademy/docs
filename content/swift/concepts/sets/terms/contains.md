---
Title: '.contains()'
Description: 'Checks whether an item exists within the set.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Sets'
  - 'Methods'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`contains()`** method returns true if the given element exists in the set, false otherwise.

## Syntax

```pseudo
if mySet.contains(number) {
    print("This set contains this number: \(number)")
} else {
    print("This set does not contain this number: \(number)")
}
```

## Example

```swift
let mySet: Set = [1, 2, 3, 4]
let number = 2
if mySet.contains(number) {
    print("This set contains this number: \(number)")
} else {
    print("This set does not contain this number: \(number)")
}

// Output: This set contains this number: 2
```
