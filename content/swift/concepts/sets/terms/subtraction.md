---
Title: '.subtract()'
Description: 'Removes the elements in the given set from the target set.'
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

The **`.subtract()`** method subtracts the elements in the given set from the target set.

## Syntax

```pseudo
targetSet.subtract(givenSet)
```

## Example

```swift
let produce: Set = ["Lettuce", "Apples", "Carrots", "Bananas", "Brocolli", "Onion"]
let fruit: Set = ["Apples", "Bananas"]
produce.subtract(fruit)
print(produce)
```

This will output:

```shell
["Lettuce", "Carrots", "Brocolli", "Onion"]
```

> **Note:** A set is an unordered data structure, so output elements may be ordered differently.
