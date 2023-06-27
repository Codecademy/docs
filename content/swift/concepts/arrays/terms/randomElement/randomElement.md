---
Title: '.randomElement()'
Description: 'Returns a random element from of arrary.'
Subjects:
  - 'iOS'
  - 'Mobile Development'
Tags:
  - 'Arrays'
  - 'Methods'
CatalogContent:
  - 'learn-swift'
  - 'paths/build-ios-apps-with-swiftui'
---

The ** `.randomElement()` method will randomly return an element from an  array. If the array is empty, it will return nil.

## Syntax

```swift 
arrayName.randomElement()

```

## Example

```swift
var discount = ["10%", "20%", "30%", "40%", "50%"]
let randomDiscount = discount.randomElement()!
let randomDiscount2 = discount.randomElement()!
print(randomDiscount)
print(randomDiscount2)
```

The output will be:

```shell
10%
50%
```
