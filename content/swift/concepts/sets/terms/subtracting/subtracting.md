---
Title: '.subtracting()'
Description: 'Returns a new set containing the elements from the target set that are not in the given set.'
Subjects:
  - 'Computer Science'
  - 'Mobile Development'
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

The elements of `givenSet` are removed from the elements of `targetSet` and what elements remain are placed into `newSet`.

## Example

In the example below, the elements from the `fruit` set are removed from the elements in the `produce` set and the remaining elements are placed in the new `veggies` set:

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
