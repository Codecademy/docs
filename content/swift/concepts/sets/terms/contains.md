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

The **`contains()`** method returns `true` if the given element exists in the set, `false` otherwise.

## Syntax

```pseudo
setName.contains(element)
```

## Example

```swift
let numberSet: Set = [1, 2, 3, 4]
let targetNumber = 2
if numberSet.contains(targetNumber) {
    print("This set contains this number: \(targetNumber)")
} else {
    print("This set does not contain this number: \(targetNumber)")
}

// Output: This set contains this number: 2
```
