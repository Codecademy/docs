---
Title: '.subtracting()'
Description: 'Returns a new set containing the elements from the target set that are not in the given set.'
  - 'Mobile Development'
  - 'Computer Science'
Tags:
  - 'Data Types'
  - 'Variables'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.subtracting()`** method creates a new set containing the elements from the target set that are not in the given set.

## Syntax

```pseudo
newSet = targetSet.subtracting(givenSet)
```

## Example

```swift
let produce: Set = ["Lettuce", "Apples", "Carrots", "Bananas", "Broccoli", "Onions"]
let fruit: Set = ["Apples", "Bananas"]
let veggies = produce.subtracting(fruit)
print(veggies)
```

This will output:

```shell
["Lettuce", "Carrots", "Broccoli", "Onions"]
```

> **Note:** A set is an unordered data structure, so output elements may be ordered differently.

