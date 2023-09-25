---
Title: '.randomElement()'
Description: 'Returns a random element from an array.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Arrays'
  - 'Collections'
  - 'Methods'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The **`.randomElement()`** method will return a random element from an array or another given collection.

## Syntax

```pseudo
arrayName.randomElement()
```

The method selects a random element from the collection `arrayName`. If the passed collection is empty, it will return `nil`.

## Example

A basic implementation of the `.randomElement()` method:

```swift
var discount = ["10%", "20%", "30%", "40%", "50%"]
let randomDiscount = discount.randomElement()!
let randomDiscount2 = discount.randomElement()!
print(randomDiscount)
print(randomDiscount2)
```

The output will be similar to:

```shell
10%
50%
```
