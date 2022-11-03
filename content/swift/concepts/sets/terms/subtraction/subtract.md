---
Title: '.subtracting()'
Description: 'Returns a new set containing the elements in the target set that are not in the given set.'
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

The **`.subtracting()`** method subtracts the elements in the given set from the target set.

## Syntax

```pseudo
targetSet.subtracting(givenSet)
```

## Example

```swift
let produce: Set = ["Lettuce", "Apples", "Carrots", "Bananas", "Brocolli", "Onion"]
let fruit: Set = ["Apples", "Bananas"]
let veggies = produce.subtracting(fruit)
print(veggies)
```

This will output:

```shell
["Lettuce", "Carrots", "Brocolli", "Onion"]
```

> **Note:** A set is an unordered data structure, so output elements may be ordered differently.
